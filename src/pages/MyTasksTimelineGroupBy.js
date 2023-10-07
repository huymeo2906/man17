import { useState, useCallback } from "react";
import SettingInfo from "../components/SettingInfo";
import PortalPopup from "../components/PortalPopup";
import SettingCollumn from "../components/SettingCollumn";
import GroupProjectWork from "../components/GroupProjectWork";
import Calendar from "../components/Calendar";
import ChiTitCngVicDefault from "../components/ChiTitCngVicDefault";
import { useNavigate } from "react-router-dom";
import styles from "./MyTasksTimelineGroupBy.module.css";

const MyTasksTimelineGroupBy = () => {
  const [isSettingInfoOpen, setSettingInfoOpen] = useState(false);
  const [isSettingCollumnOpen, setSettingCollumnOpen] = useState(false);
  const [isGroupProjectWorkOpen, setGroupProjectWorkOpen] = useState(false);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isCalendar1Open, setCalendar1Open] = useState(false);
  const [isChiTitCngVicDefaultOpen, setChiTitCngVicDefaultOpen] =
    useState(false);
  const [isChiTitCngVicDefault1Open, setChiTitCngVicDefault1Open] =
    useState(false);
  const [isChiTitCngVicDefault2Open, setChiTitCngVicDefault2Open] =
    useState(false);
  const [isChiTitCngVicDefault3Open, setChiTitCngVicDefault3Open] =
    useState(false);
  const [isChiTitCngVicDefault4Open, setChiTitCngVicDefault4Open] =
    useState(false);
  const [isChiTitCngVicDefault5Open, setChiTitCngVicDefault5Open] =
    useState(false);
  const [isChiTitCngVicDefault6Open, setChiTitCngVicDefault6Open] =
    useState(false);
  const [isChiTitCngVicDefault7Open, setChiTitCngVicDefault7Open] =
    useState(false);
  const [isChiTitCngVicDefault8Open, setChiTitCngVicDefault8Open] =
    useState(false);
  const navigate = useNavigate();

  const onIconButtonContainerClick = useCallback(() => {
    // Please sync "Dashboard / Nhân viên" to the project
  }, []);

  const openSettingInfo = useCallback(() => {
    setSettingInfoOpen(true);
  }, []);

  const closeSettingInfo = useCallback(() => {
    setSettingInfoOpen(false);
  }, []);

  const openSettingCollumn = useCallback(() => {
    setSettingCollumnOpen(true);
  }, []);

  const closeSettingCollumn = useCallback(() => {
    setSettingCollumnOpen(false);
  }, []);

  const onProjectContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openGroupProjectWork = useCallback(() => {
    setGroupProjectWorkOpen(true);
  }, []);

  const closeGroupProjectWork = useCallback(() => {
    setGroupProjectWorkOpen(false);
  }, []);

  const openCalendar = useCallback(() => {
    setCalendarOpen(true);
  }, []);

  const closeCalendar = useCallback(() => {
    setCalendarOpen(false);
  }, []);

  const openCalendar1 = useCallback(() => {
    setCalendar1Open(true);
  }, []);

  const closeCalendar1 = useCallback(() => {
    setCalendar1Open(false);
  }, []);

  const openChiTitCngVicDefault = useCallback(() => {
    setChiTitCngVicDefaultOpen(true);
  }, []);

  const closeChiTitCngVicDefault = useCallback(() => {
    setChiTitCngVicDefaultOpen(false);
  }, []);

  const openChiTitCngVicDefault1 = useCallback(() => {
    setChiTitCngVicDefault1Open(true);
  }, []);

  const closeChiTitCngVicDefault1 = useCallback(() => {
    setChiTitCngVicDefault1Open(false);
  }, []);

  const openChiTitCngVicDefault2 = useCallback(() => {
    setChiTitCngVicDefault2Open(true);
  }, []);

  const closeChiTitCngVicDefault2 = useCallback(() => {
    setChiTitCngVicDefault2Open(false);
  }, []);

  const openChiTitCngVicDefault3 = useCallback(() => {
    setChiTitCngVicDefault3Open(true);
  }, []);

  const closeChiTitCngVicDefault3 = useCallback(() => {
    setChiTitCngVicDefault3Open(false);
  }, []);

  const openChiTitCngVicDefault4 = useCallback(() => {
    setChiTitCngVicDefault4Open(true);
  }, []);

  const closeChiTitCngVicDefault4 = useCallback(() => {
    setChiTitCngVicDefault4Open(false);
  }, []);

  const openChiTitCngVicDefault5 = useCallback(() => {
    setChiTitCngVicDefault5Open(true);
  }, []);

  const closeChiTitCngVicDefault5 = useCallback(() => {
    setChiTitCngVicDefault5Open(false);
  }, []);

  const openChiTitCngVicDefault6 = useCallback(() => {
    setChiTitCngVicDefault6Open(true);
  }, []);

  const closeChiTitCngVicDefault6 = useCallback(() => {
    setChiTitCngVicDefault6Open(false);
  }, []);

  const openChiTitCngVicDefault7 = useCallback(() => {
    setChiTitCngVicDefault7Open(true);
  }, []);

  const closeChiTitCngVicDefault7 = useCallback(() => {
    setChiTitCngVicDefault7Open(false);
  }, []);

  const openChiTitCngVicDefault8 = useCallback(() => {
    setChiTitCngVicDefault8Open(true);
  }, []);

  const closeChiTitCngVicDefault8 = useCallback(() => {
    setChiTitCngVicDefault8Open(false);
  }, []);

  return (
    <>
      <div className={styles.myTasksTimelineGroupBy}>
        <div className={styles.menu}>
          <div className={styles.menuMini}>
            <div className={styles.frameParent}>
              <div className={styles.uangleDoubleRightWrapper}>
                <img
                  className={styles.uangleDoubleRightIcon}
                  alt=""
                  src="/uangledoubleright.svg"
                />
              </div>
              <div className={styles.iconButtonParent}>
                <div
                  className={styles.iconButton}
                  onClick={onIconButtonContainerClick}
                >
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uhomealt.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ulistul.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usuitcase.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ufilemedicalalt.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usitemap.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uusersalt.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.uangleDoubleRightWrapper}>
              <img
                className={styles.uangleDoubleRightIcon}
                alt=""
                src="/usetting.svg"
              />
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
            <div className={styles.image1Parent}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
              <div className={styles.trangChParent}>
                <div className={styles.trangCh}>Trang chủ</div>
                <div className={styles.mennuParent}>
                  <div className={styles.mennu}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/ucreatedashboard.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay}>Dashboard</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div className={styles.mennuGroup}>
                    <div className={styles.mennu1}>
                      <img
                        className={styles.uangleRightIcon}
                        alt=""
                        src="/ulistuialt.svg"
                      />
                      <div className={styles.hmNayWrapper}>
                        <div className={styles.hmNay}>Việc của tôi</div>
                      </div>
                      <img
                        className={styles.uangleRightIcon}
                        alt=""
                        src="/uangleright1.svg"
                      />
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.downParent}>
                        <img
                          className={styles.downIcon}
                          alt=""
                          src="/down.svg"
                        />
                        <div className={styles.dNParent}>
                          <div className={styles.dN}>Dự án</div>
                          <div className={styles.wrapper}>
                            <div className={styles.dN}>06</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameContainer}>
                        <div className={styles.menuFilterParent}>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>E-Work</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>CEO Loyalty</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>Mobishop</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>
                                Lixil Ecommerce
                              </div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>Travel Booking</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>Golf Manage</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameWrapper}>
                          <div className={styles.uplusParent}>
                            <img
                              className={styles.uplusIcon}
                              alt=""
                              src="/uplus.svg"
                            />
                            <div className={styles.toDN}>Tạo dự án mới</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.downParent}>
                      <img
                        className={styles.downIcon}
                        alt=""
                        src="/down1.svg"
                      />
                      <div className={styles.dNParent}>
                        <div className={styles.dN}>Tiến độ</div>
                        <div className={styles.wrapper4}>
                          <div className={styles.dN}>06</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.downParent}>
                        <img
                          className={styles.downIcon}
                          alt=""
                          src="/down.svg"
                        />
                        <div className={styles.dNParent}>
                          <div className={styles.dN}>Việc đơn vị</div>
                          <div className={styles.container}>
                            <div className={styles.dN}>06</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.menuFilterParent}>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>Giao</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>Được giao</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>Theo dõi</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.mennu}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/uchartline.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay}>Báo cáo</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerParent}>
          <div className={styles.header}>
            <div className={styles.flow1Parent}>
              <img className={styles.flow1Icon} alt="" src="/flow-1.svg" />
              <div className={styles.avt}>
                <div className={styles.userpic} />
                <div className={styles.state} />
                <div className={styles.label}>KA</div>
              </div>
              <div className={styles.overviewParent}>
                <div className={styles.trangCh}>Overview</div>
                <div className={styles.employees}>Employees</div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.memberParent}>
                <div className={styles.member}>
                  <div className={styles.avt1}>
                    <div className={styles.userpic1} />
                    <div className={styles.state1} />
                    <div className={styles.label1}>KA</div>
                  </div>
                  <div className={styles.avt2}>
                    <div className={styles.userpic2} />
                    <div className={styles.state1} />
                    <div className={styles.label1}>NH</div>
                  </div>
                  <div className={styles.avt3}>
                    <div className={styles.userpic3} />
                    <div className={styles.state1} />
                    <div className={styles.label1}>HN</div>
                  </div>
                  <div className={styles.avt4}>
                    <img
                      className={styles.ovalCopy3}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.wrapper9}>
                      <div className={styles.div12}>+3</div>
                    </div>
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.ulistUiAltParent}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/usearch.svg"
                    />
                         <input
                          type="text"
                         placeholder="Search..."
                         value={inputValue}
                         onChange={handleInputChange}
                         />
                  </div>
                  <img
                    className={styles.uangleDownIcon}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
              </div>
              <div className={styles.uplusWrapper}>
                <img
                  className={styles.ucreateDashboardIcon}
                  alt=""
                  src="/uplus1.svg"
                />
              </div>
              <div className={styles.memberParent}>
                <div className={styles.component2}>
                  <div className={styles.ucommentDotsWrapper}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/ucommentdots.svg"
                    />
                  </div>
                  <div className={styles.component2Child} />
                </div>
                <div className={styles.component2}>
                  <div className={styles.ucommentDotsWrapper}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/unotifiacation.svg"
                    />
                  </div>
                  <div className={styles.component2Child} />
                </div>
                <div className={styles.unsplashfgUd73uZmWrapper}>
                  <img
                    className={styles.unsplashfgUd73uZmIcon}
                    alt=""
                    src="/unsplashfg-ud73u-zm@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.frameParent3}>
              <div className={styles.filterParent}>
                <div className={styles.filter}>
                  <div className={styles.dNParent}>
                    <img
                      className={styles.ufilterIcon}
                      alt=""
                      src="/usetting1.svg"
                    />
                    <div className={styles.toDN}>Tùy chỉnh bảng</div>
                  </div>
                  <img
                    className={styles.uangleDownIcon1}
                    alt=""
                    src="/uangledown.svg"
                    onClick={openSettingInfo}
                  />
                </div>
                <div className={styles.filter1}>
                  <div className={styles.dNParent}>
                    <img
                      className={styles.ufilterIcon}
                      alt=""
                      src="/ufilter.svg"
                    />
                    <div className={styles.toDN}>Bộ lọc</div>
                  </div>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/uangleright2.svg"
                  />
                </div>
              </div>
              <div className={styles.layout}>
                <div className={styles.project}>
                  <div className={styles.uwebGridAltParent}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/ulistuialt2.svg"
                    />
                    <div className={styles.toDN}>List</div>
                  </div>
                  <img
                    className={styles.downIcon3}
                    alt=""
                    src="/down2.svg"
                    onClick={openSettingCollumn}
                  />
                </div>
                <div className={styles.project}>
                  <div className={styles.uwebGridAltParent}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/uwebgridalt.svg"
                    />
                    <div className={styles.toDN}>Bảng</div>
                  </div>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
                <div
                  className={styles.project2}
                  onClick={onProjectContainer2Click}
                >
                  <div className={styles.uwebGridAltParent}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/ucalendaralt.svg"
                    />
                    <div className={styles.toDN}>Lịch</div>
                  </div>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
                <div className={styles.project}>
                  <div className={styles.uwebGridAltParent}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/usubject.svg"
                    />
                    <div className={styles.toDN}>Timeline</div>
                  </div>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
              </div>
              <div className={styles.time}>
                <div className={styles.dNParent}>
                  <img
                    className={styles.uangleDoubleRightIcon}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.spXpTheoParent}>
                    <div className={styles.spXpTheo}>Việc hiển thị</div>
                    <div className={styles.employees}>Ngày hôm nay</div>
                  </div>
                </div>
                <img
                  className={styles.uangleDownIcon}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.calendarParent}>
            <div className={styles.calendar}>
              <div className={styles.toDN}>Group by</div>
              <div className={styles.taskName} onClick={openGroupProjectWork}>
                <div className={styles.input1}>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.label4}>Trạng thái</div>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <img className={styles.downIcon7} alt="" src="/down3.svg" />
                </div>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.frameParent6}>
                <div className={styles.frameParent7}>
                  <div className={styles.uangleLeftWrapper}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/uangleleft.svg"
                    />
                  </div>
                  <div className={styles.thng52022}>Tháng 5/2022</div>
                  <div className={styles.uangleRightWrapper}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/uangleright2.svg"
                    />
                  </div>
                </div>
                <div className={styles.project4}>
                  <div className={styles.uwebGridAltParent}>
                    <img
                      className={styles.uangleDownIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.toDN}>Tháng</div>
                  </div>
                  <img
                    className={styles.downIcon3}
                    alt=""
                    src="/down2.svg"
                    onClick={openCalendar}
                  />
                </div>
                <div className={styles.project4}>
                  <div className={styles.uwebGridAltParent}>
                    <img
                      className={styles.uangleDownIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.toDN}>Hôm nay</div>
                  </div>
                  <img
                    className={styles.downIcon9}
                    alt=""
                    src="/oval-copy-3.svg"
                    onClick={openCalendar1}
                  />
                </div>
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.thng5Parent}>
                  <div className={styles.dN}>Tháng 5</div>
                  <div className={styles.dN}>Tháng 6</div>
                </div>
                <div className={styles.instanceParent}>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>8</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>9</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>10</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>11</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>12</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>13</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>14</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>15</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>16</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>17</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper13}>
                    <div className={styles.wrapper20}>
                      <div className={styles.div14}>18</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>19</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>20</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>21</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>22</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>23</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>24</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>1</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>2</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>3</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>4</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>29</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>8</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div37}>8</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>8</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>8</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.uangleDoubleRightIcon}>
                      <div className={styles.div14}>8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent9}>
            <div className={styles.downParent1}>
              <img className={styles.downIcon} alt="" src="/down.svg" />
              <div className={styles.uwebGridAltParent}>
                <div className={styles.avt5}>
                  <div className={styles.userpic4} />
                  <div className={styles.state4} />
                  <div className={styles.label5}>VA</div>
                </div>
                <div className={styles.vAnh}>Vũ Anh</div>
              </div>
            </div>
            <div className={styles.groupParent}>
              <div className={styles.taskNameParent}>
                <div
                  className={styles.taskName1}
                  onClick={openChiTitCngVicDefault}
                >
                  <div className={styles.input1}>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.label4}>
                      Thiết kế view Calendar...
                    </div>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <img
                      className={styles.outlineClose}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                </div>
                <div
                  className={styles.taskName2}
                  onClick={openChiTitCngVicDefault1}
                >
                  <div className={styles.input3}>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.label4}>
                      Thiết kế view Timeline...
                    </div>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <img
                      className={styles.outlineClose}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                </div>
                <div
                  className={styles.taskName3}
                  onClick={openChiTitCngVicDefault2}
                >
                  <div className={styles.input4}>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.label4}>
                      <span>{`Thiết kế popup / E-Work / 24.05.2022 / Cần làm / `}</span>
                      <span className={styles.vAnh1}>Vũ Anh</span>
                    </div>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <img
                      className={styles.outlineClose}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.tooltip}>
                <div className={styles.tooltip1}>
                  <img
                    className={styles.outlineClose}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.label9}>
                    <span>{`Thiết kế view Calendar / E-Work / 16.05.2022 / Cần làm / `}</span>
                    <span className={styles.vAnh1}>Vũ Anh</span>
                  </div>
                  <img
                    className={styles.outlineClose}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
                <div className={styles.arrow}>
                  <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent9}>
            <div className={styles.downParent1}>
              <img className={styles.downIcon} alt="" src="/down.svg" />
              <div className={styles.uwebGridAltParent}>
                <div className={styles.avt5}>
                  <div className={styles.userpic5} />
                  <div className={styles.state4} />
                  <div className={styles.label5}>NC</div>
                </div>
                <div className={styles.vAnh}>Nguyễn Cường</div>
              </div>
            </div>
            <div className={styles.groupWrapper}>
              <div className={styles.taskNameGroup}>
                <div
                  className={styles.taskName4}
                  onClick={openChiTitCngVicDefault3}
                >
                  <div className={styles.input5}>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.label4}>
                      <span>{`Thiết kế màn Overview cho Project / E-Work / Đang thực hiện / `}</span>
                      <span className={styles.vAnh1}>Nguyễn Cường</span>
                    </div>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <img
                      className={styles.outlineClose}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                </div>
                <div
                  className={styles.taskName5}
                  onClick={openChiTitCngVicDefault4}
                >
                  <div className={styles.input5}>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.label4}>
                      Thiết kế bổ sung roadmap / E-Work / ...
                    </div>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <img
                      className={styles.outlineClose}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                </div>
                <div
                  className={styles.taskName6}
                  onClick={openChiTitCngVicDefault5}
                >
                  <div className={styles.input7}>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.label4}>
                      <span>{`Thiết kế màn “Danh sách thành viên” cho Project / E-Work / Đang thực hiện / `}</span>
                      <span className={styles.vAnh1}>Nguyễn Cường</span>
                    </div>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <img
                      className={styles.outlineClose}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent9}>
            <div className={styles.downParent1}>
              <img className={styles.downIcon} alt="" src="/down.svg" />
              <div className={styles.uwebGridAltParent}>
                <div className={styles.avt5}>
                  <div className={styles.userpic6} />
                  <div className={styles.state4} />
                  <div className={styles.label5}>HA</div>
                </div>
                <div className={styles.vAnh}>Hoàng Anh</div>
              </div>
            </div>
            <div className={styles.groupWrapper}>
              <div className={styles.taskNameContainer}>
                <div
                  className={styles.taskName7}
                  onClick={openChiTitCngVicDefault6}
                >
                  <div className={styles.input8}>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.label4}>
                      Thiết kế Dashboard / E-Work / 17.05.2022 /...
                    </div>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <img
                      className={styles.outlineClose}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                </div>
                <div
                  className={styles.taskName5}
                  onClick={openChiTitCngVicDefault7}
                >
                  <div className={styles.input5}>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.label4}>
                      Thiết kế màn hình Công việc / E-Work / 19.05.2022 /...
                    </div>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <img
                      className={styles.outlineClose}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                </div>
                <div
                  className={styles.taskName9}
                  onClick={openChiTitCngVicDefault8}
                >
                  <div className={styles.input5}>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.label4}>
                      <span>{`Thiết kế màn hình Công việc / E-Work / 17.05.2022 / Review / `}</span>
                      <span className={styles.vAnh1}>Hoàng Anh</span>
                    </div>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <img
                      className={styles.outlineClose}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.myTasksTimelineGroupByChild} />
      </div>
      {isSettingInfoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSettingInfo}
        >
          <SettingInfo onClose={closeSettingInfo} />
        </PortalPopup>
      )}
      {isSettingCollumnOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSettingCollumn}
        >
          <SettingCollumn onClose={closeSettingCollumn} />
        </PortalPopup>
      )}
      {isGroupProjectWorkOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGroupProjectWork}
        >
          <GroupProjectWork onClose={closeGroupProjectWork} />
        </PortalPopup>
      )}
      {isCalendarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalendar}
        >
          <Calendar onClose={closeCalendar} />
        </PortalPopup>
      )}
      {isCalendar1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalendar1}
        >
          <Calendar onClose={closeCalendar1} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefaultOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault1}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault1} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault2}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault2} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault3}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault3} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault4}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault4} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault5}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault5} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault6Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault6}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault6} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault7Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault7}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault7} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault8Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault8}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault8} />
        </PortalPopup>
      )}
    </>
  );
};

export default MyTasksTimelineGroupBy;
