import { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

import { BoxHeader } from "components/headers";

import { COMPANY_ANALYTICS_MAIN } from "./analytics/company-analytics.routes.consts";
import { CompanyAnalyticsMainPanel } from "./analytics/CompanyAnalyticsMain.panel";
import { BUSINESS_UNIT_MAIN } from "./business-unit/business-unit.routes.consts";
import { BusinessUnitMainPanel } from "./business-unit/BusinessUnitMain.panel";
import {
  DEMO_FORMS_ALERTS,
  DEMO_FORMS_WIDGETS,
  DEMO_ICONS,
  DEMO_LAYOUTS_CARD,
  DEMO_LAYOUTS_GRID,
  DEMO_USER_PROFILE,
} from "./company.routes.const";
import { DemoAlertsPanel } from "./demos/forms/alerts/DemoAlerts.panel";
import DemoFormsPanel from "./demos/forms/widgets/DemoForms.panel";
import { DemoCardsPanel } from "./demos/layout/cards/DemoCards.panel";
import DemoLayoutsPanel from "./demos/layout/grid/DemoLayouts.panel";
import { DEPARTMENT_MAIN } from "./department/department.routes.consts";
import { DepartmentMainPanel } from "./department/DepartmentMain.panel";
import { EMPLOYEE_MAIN } from "./employee/employee.routes.consts";
import { EmployeeMainPanel } from "./employee/EmployeeMain.panel";
import { GROUP_MAIN } from "./group/group.routes.consts";
import { GroupMainPanel } from "./group/GroupsMain.panel";
import { JOB_TITLE_MAIN } from "./job-title/job-title.routes.consts";
import { JobTitleMainPanel } from "./job-title/JobTitleMain.panel";
import { OrganizationMainPanel } from "./organization/Organization.panel";
import { ORGANIZATION_MAIN } from "./organization/organization.routes.consts";
import { SetupMainPanel } from "./setup/Setup.panel";
import { SETUP_MAIN } from "./setup/setup.routes.consts";
import { TeamMainPanel } from "./team/Team.panel";
import { TEAM_MAIN } from "./team/team.routes.consts";
import { ProfilePage } from "./user-profile";
import { IconsPage } from "./icons";

export const CompanyPage = () => {
  const [activeTab, setActiveTab] = useState(EMPLOYEE_MAIN);
  const [activeDemoMenu, setActiveDemoMenu] = useState(false);
  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Company</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="1">&nbsp;</Col>
                  <Col
                    lg="11"
                    className="d-flex flex-column justify-content-end"
                  >
                    <FormGroup>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={() => setActiveTab(SETUP_MAIN)}
                      >
                        Setup
                      </Button>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={() => setActiveTab(ORGANIZATION_MAIN)}
                      >
                        Organizations
                      </Button>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={() => setActiveTab(JOB_TITLE_MAIN)}
                      >
                        Job Titles
                      </Button>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={() => setActiveTab(EMPLOYEE_MAIN)}
                      >
                        Employees
                      </Button>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={() => setActiveTab(BUSINESS_UNIT_MAIN)}
                      >
                        Business Units
                      </Button>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={() => setActiveTab(DEPARTMENT_MAIN)}
                      >
                        Departments
                      </Button>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={() => setActiveTab(GROUP_MAIN)}
                      >
                        Groups
                      </Button>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={() => setActiveTab(TEAM_MAIN)}
                      >
                        Teams
                      </Button>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={() => setActiveTab(COMPANY_ANALYTICS_MAIN)}
                      >
                        Analytics
                      </Button>

                      <Dropdown
                        isOpen={activeDemoMenu}
                        toggle={() => setActiveDemoMenu(!activeDemoMenu)}
                      >
                        <DropdownToggle
                          caret
                          color="primary"
                          className="shadow-none text-white border-0"
                        >
                          Demo Menu
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem
                            className={`font-weight-bold ${
                              activeTab === DEMO_FORMS_WIDGETS
                                ? "bg-lighter"
                                : ""
                            }`}
                            onClick={() => setActiveTab(DEMO_FORMS_WIDGETS)}
                          >
                            Forms
                          </DropdownItem>
                          <DropdownItem
                            className={`font-weight-bold ${
                              activeTab === DEMO_FORMS_ALERTS
                                ? "bg-lighter"
                                : ""
                            }`}
                            onClick={() => setActiveTab(DEMO_FORMS_ALERTS)}
                          >
                            Alerts
                          </DropdownItem>
                          <DropdownItem
                            className={`font-weight-bold ${
                              activeTab === DEMO_LAYOUTS_GRID
                                ? "bg-lighter"
                                : ""
                            }`}
                            onClick={() => setActiveTab(DEMO_LAYOUTS_GRID)}
                          >
                            Grid Layout
                          </DropdownItem>
                          <DropdownItem
                            className={`font-weight-bold ${
                              activeTab === DEMO_LAYOUTS_CARD
                                ? "bg-lighter"
                                : ""
                            }`}
                            onClick={() => setActiveTab(DEMO_LAYOUTS_CARD)}
                          >
                            Card Layout
                          </DropdownItem>
                          <DropdownItem
                            className={`font-weight-bold ${
                              activeTab === DEMO_ICONS ? "bg-lighter" : ""
                            }`}
                            onClick={() => setActiveTab(DEMO_ICONS)}
                          >
                            Icons
                          </DropdownItem>
                          <DropdownItem
                            className={`font-weight-bold ${
                              activeTab === DEMO_USER_PROFILE
                                ? "bg-lighter"
                                : ""
                            }`}
                            onClick={() => setActiveTab(DEMO_USER_PROFILE)}
                          >
                            User profile
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <br />
                <TabContent activeTab={activeTab}>
                  <TabPane tabId={SETUP_MAIN}>
                    <SetupMainPanel />
                  </TabPane>
                  <TabPane tabId={EMPLOYEE_MAIN}>
                    <EmployeeMainPanel />
                  </TabPane>
                  <TabPane tabId={ORGANIZATION_MAIN}>
                    <OrganizationMainPanel />
                  </TabPane>
                  <TabPane tabId={JOB_TITLE_MAIN}>
                    <JobTitleMainPanel />
                  </TabPane>
                  <TabPane tabId={BUSINESS_UNIT_MAIN}>
                    <BusinessUnitMainPanel />
                  </TabPane>
                  <TabPane tabId={DEPARTMENT_MAIN}>
                    <DepartmentMainPanel />
                  </TabPane>
                  <TabPane tabId={GROUP_MAIN}>
                    <GroupMainPanel />
                  </TabPane>
                  <TabPane tabId={TEAM_MAIN}>
                    <TeamMainPanel />
                  </TabPane>
                  <TabPane tabId={COMPANY_ANALYTICS_MAIN}>
                    <CompanyAnalyticsMainPanel />
                  </TabPane>

                  <TabPane tabId={DEMO_LAYOUTS_CARD}>
                    <DemoCardsPanel />
                  </TabPane>
                  <TabPane tabId={DEMO_LAYOUTS_GRID}>
                    <DemoLayoutsPanel />
                  </TabPane>
                  <TabPane tabId={DEMO_FORMS_WIDGETS}>
                    <DemoFormsPanel />
                  </TabPane>
                  <TabPane tabId={DEMO_FORMS_ALERTS}>
                    <DemoAlertsPanel />
                  </TabPane>
                  <TabPane tabId={DEMO_USER_PROFILE}>
                    <ProfilePage />
                  </TabPane>
                  <TabPane tabId={DEMO_ICONS}>
                    <IconsPage />
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
