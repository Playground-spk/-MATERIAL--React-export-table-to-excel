import React, { useEffect, useState } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
} from "@coreui/react";

import usersData from "../../users/Usersdata";
import { useHistory, useLocation } from "react-router-dom";
import ExportToExcel from "../../../components/table/ExportToExcel";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = ["name", "registered", "role", "status"];

function TableTarget() {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);
  const [itemPerPage, setItemPerPage] = useState(10);
  let pagesInPagination = usersData.length / itemPerPage;

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <CRow>
              <CCol></CCol>
              <CCol>
                <ExportToExcel csvData={usersData} fileName="userInfo" />
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              striped
              bordered
              activePage={page}
              itemsPerPage={itemPerPage}
              scopedSlots={{
                status: (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                  </td>
                ),
              }}
            />
            <CPagination
              activePage={page}
              pages={Math.ceil(pagesInPagination)}
              onActivePageChange={pageChange}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default TableTarget;
