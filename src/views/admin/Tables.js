import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import { ordersData2 } from "data/DatatOrders";
import { ordersData } from "data/DatatOrders";
import { ordersData3 } from "data/DatatOrders";
export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" orders= {ordersData2} table_name='كل الطلبات'/>
          <CardTable color="dark" orders= {ordersData} table_name='طلبات منتهية'/>
          <CardTable color="dark" orders= {ordersData3} table_name='طلبات غير منتهية'/>
        </div>
        
      </div>
    </>
  );
}
// <div className="w-full mb-12 px-4">
// <CardTable />
// </div>
