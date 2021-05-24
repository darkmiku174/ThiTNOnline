import React from 'react'

const CustomTable = ({columns, data}) => {

  const CUSTOM_TABLE_STYLES = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(0, 0, 0, 0.125)",
    borderRadius: "0.3rem"
  }

  const CUSTOM_TABLE_HEADER_STYLES = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.125)"
  }

  const CUSTOM_COLUMN_STYLES = {
    padding: "0.3rem 0.6rem",
  }
  const CUSTOM_TABLE_BODY_STYLES = {
    display: "flex"
  }

  const CUSTOM_TABLE_ROW_STYLE = {
    padding: "0.3rem 0.6rem",
    borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
    borderRight: "1px solid rgba(0, 0, 0, 0.125)"
  }

  return (
    <div className="custom-table" style={CUSTOM_TABLE_STYLES}>
      <div className="custom-table-header" style={CUSTOM_TABLE_HEADER_STYLES}>
        {columns.map((c, index) =>
          <div style={{...CUSTOM_COLUMN_STYLES, borderRight: index === columns.length ? "none" : "1px solid rgba(0, 0, 0, 0.125)"}} key={index}>{c}</div>
        )}
      </div>
      <div className="custom-table-body" style={CUSTOM_TABLE_BODY_STYLES}>
        {data.map((r, index) =>
          <div style={{
            ...CUSTOM_TABLE_ROW_STYLE,
            borderBottom: index === data.length - 1
              ? "none"
              : "1px solid rgba(0, 0, 0, 0.125)"
          }}>
            {r}
          </div>
        )}
      </div>
    </div >
  )
}

export default CustomTable

