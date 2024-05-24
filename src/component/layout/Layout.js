import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";
function Layout() {
  return (
    <div className="lala">
      <header>
        <h1>شركة الطويل للزجاج </h1>
        <nav>
          <ul>
            <li>
              <a href="/">اضافة ورشة</a>
            </li>
            <li>
              <a href="/HsabatForm">الحسابات</a>
            </li>
            <li>
              <a href="/ClientForm">اضافة زبون جديد</a>
            </li>
            <li>
              <a href="/ClientList">قائمة الزبائن</a>
            </li>

            <li>
              <a href="/ClientAccounts"> حساب الزبائن</a>
            </li>

            <li>
              <a href="/newadd"> ادارة مخزون </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
