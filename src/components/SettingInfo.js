import styles from "./SettingInfo.module.css";

const SettingInfo = () => {
  return (
    <div className={styles.settingInfo}>
      <div className={styles.dueDateWrapper}>
        <div className={styles.dueDate}>Chọn thông tin hiển thị</div>
      </div>
      <div className={styles.instanceParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.dueDateWrapper}>
              <div className={styles.settingsEthernet1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector14.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector15.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.dueDateWrapper}>
                <div className={styles.dueDate1}>Tên công việc</div>
              </div>
            </div>
            <div className={styles.switch}>
              <div className={styles.switchInner}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.dueDateWrapper}>
              <div className={styles.settingsEthernet1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector16.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector17.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.dueDateWrapper}>
                <div className={styles.dueDate1}>Dự án</div>
              </div>
            </div>
            <div className={styles.switch}>
              <div className={styles.switchInner}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.dueDateWrapper}>
              <div className={styles.settingsEthernet1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector18.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector19.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.dueDateWrapper}>
                <div className={styles.dueDate1}>Ngày giao việc</div>
              </div>
            </div>
            <div className={styles.switch}>
              <div className={styles.switchInner1}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.dueDateWrapper}>
              <div className={styles.settingsEthernet1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector20.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector21.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.dueDateWrapper}>
                <div className={styles.dueDate1}>Ngày hết hạn</div>
              </div>
            </div>
            <div className={styles.switch}>
              <div className={styles.switchInner}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.dueDateWrapper}>
              <div className={styles.settingsEthernet1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector22.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector23.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.dueDateWrapper}>
                <div className={styles.dueDate1}>Trạng thái</div>
              </div>
            </div>
            <div className={styles.switch}>
              <div className={styles.switchInner}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.dueDateWrapper}>
              <div className={styles.settingsEthernet1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector24.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector25.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.dueDateWrapper}>
                <div className={styles.dueDate1}>Người thực hiện</div>
              </div>
            </div>
            <div className={styles.switch}>
              <div className={styles.switchInner}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper4}>
          <div className={styles.frameParent5}>
            <div className={styles.dueDateWrapper}>
              <div className={styles.settingsEthernet1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector26.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector27.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.dueDateWrapper}>
                <div className={styles.dueDate1}>Thêm thông tin</div>
              </div>
            </div>
            <img className={styles.uplusIcon} alt="" src="/uplus6.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingInfo;
