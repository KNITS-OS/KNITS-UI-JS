/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { WorkOrdersPage } from "pages/work-orders";
import { WORK_ORDERS_PAGE } from "routes.const";
import { MaintenancePage } from "pages/maintenance";
import { MAINTENANCE_PAGE } from "routes.const";
import { ANALYTICS_PAGE } from "routes.const";
import { AnalyticsPage } from "pages/analytics";
import { RequestsPage } from "pages/requests/Requests.page";
import { REQUESTS_PAGE } from "routes.const";
import { LOCATIONS_PAGE } from "routes.const";
import { LocationsPage } from "pages/locations";
import { AssetsPage } from "pages/assets";
import { ASSETS_PAGE } from "routes.const";
import { PARTS_INVENTORY_PAGE } from "routes.const";
import { PartsInventoryPage } from "pages/parts-inventory";
import { PURCHASE_ORDERS_PAGE } from "routes.const";
import { PurchaseOrdersPage } from "pages/purchase-orders";
import { METERS_PAGE } from "routes.const";
import { MetersPage } from "pages/meters";
import { PEOPLE_TEAMS_PAGE } from "routes.const";
import { PeopleAndTeamsPage } from "pages/people-teams";
import { VENDORS_CUSTOMERS_PAGE } from "routes.const";
import { VendorsCustomersPage } from "pages/vendors-customers";
import { COMPANY_ROUTE } from "routes.const";
import { CompanyPage } from "pages/company";
import { HomePage } from "pages/home";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: HomePage,
    layout: "/admin",
  },
  {
    path: `${WORK_ORDERS_PAGE}`,
    name: "Work Orders",
    icon: "ni ni-single-copy-04 text-info",
    component: WorkOrdersPage,
    layout: "/admin",
  },
  {
    path: `${MAINTENANCE_PAGE}`,
    name: "Preventive Maintenance",
    icon: "ni ni-building text-info",
    component: MaintenancePage,
    layout: "/admin",
  },
  {
    path: `${ANALYTICS_PAGE}`,
    name: "Analytics",
    icon: "ni ni-sound-wave text-info",
    component: AnalyticsPage,
    layout: "/admin",
  },
  {
    path: `${REQUESTS_PAGE}`,
    name: "Requests",
    icon: "ni ni-send text-info",
    component: RequestsPage,
    layout: "/admin",
  },
  {
    path: `${LOCATIONS_PAGE}`,
    name: "Locations",
    icon: "ni ni-square-pin text-info",
    component: LocationsPage,
    layout: "/admin",
  },
  {
    path: `${ASSETS_PAGE}`,
    name: "Assets",
    icon: "ni ni-app text-info",
    component: AssetsPage,
    layout: "/admin",
  },
  {
    path: `${PARTS_INVENTORY_PAGE}`,
    name: "Parts/Inventory",
    icon: "ni ni-key-25 text-info",
    component: PartsInventoryPage,
    layout: "/admin",
  },
  {
    path: `${PURCHASE_ORDERS_PAGE}`,
    name: "Purchase Orders",
    icon: "ni ni-money-coins text-info",
    component: PurchaseOrdersPage,
    layout: "/admin",
  },
  {
    path: `${METERS_PAGE}`,
    name: "Meters",
    icon: "ni ni-user-run text-info",
    component: MetersPage,
    layout: "/admin",
  },
  {
    path: `${PEOPLE_TEAMS_PAGE}`,
    name: "People & Teams",
    icon: "ni ni-badge text-info",
    component: PeopleAndTeamsPage,
    layout: "/admin",
  },
  {
    path: `${VENDORS_CUSTOMERS_PAGE}`,
    name: "Vendors & Customers",
    icon: "ni ni-circle-08 text-info",
    component: VendorsCustomersPage,
    layout: "/admin",
  },
  {
    path: `${COMPANY_ROUTE}`,
    name: "Company",
    icon: "ni ni-briefcase-24 text-primary",
    component: CompanyPage,
    layout: "/admin",
  },
];
export default routes;
