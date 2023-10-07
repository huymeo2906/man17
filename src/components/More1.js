import { useState, useCallback } from "react";
import More2 from "./More2";
import PortalPopup from "./PortalPopup";
import styles from "./More1.module.css";

const More1 = () => {
  const [isMoreOpen, setMoreOpen] = useState(false);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Todo / Board / Time" to the project
  }, []);

  const openMore = useCallback(() => {
    setMoreOpen(true);
  }, []);

  const closeMore = useCallback(() => {
    setMoreOpen(false);
  }, []);

  return (
    <>
      <div className={styles.more}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.ucalendarAltParent}>
              <img
                className={styles.ucalendarAltIcon}
                alt=""
                src="/ucalendaralt5.svg"
              />
              <div className={styles.thiGian}>Thời gian</div>
            </div>
            <img
              className={styles.ucalendarAltIcon}
              alt=""
              src="/uangleup1.svg"
            />
          </div>
          <div className={styles.frameContainer}>
            <div
              className={styles.ucheckParent}
              onClick={onFrameContainer2Click}
            >
              <img
                className={styles.ucalendarAltIcon}
                alt=""
                src="/ucheck.svg"
              />
              <div className={styles.hmNay}>Hôm nay</div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.ngyMai}>Ngày mai</div>
            <div className={styles.frameChild} />
            <div className={styles.ngyTipTheo}>7 ngày tiếp theo</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.ucalendarAltParent}>
                <img
                  className={styles.ucalendarAltIcon}
                  alt=""
                  src="/ufile.svg"
                />
                <div className={styles.thiGian}>Dự án</div>
              </div>
              <img
                className={styles.uangleDownIcon}
                alt=""
                src="/uangledown1.svg"
                onClick={openMore}
              />
            </div>
            <div className={styles.inputParent}>
              <div className={styles.input}>
                <div className={styles.ucalendarAltParent}>
                  <img
                    className={styles.usearchIcon}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.search}>Search</div>
                </div>
                <img
                  className={styles.uangleDownIcon1}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.ucheckGroup}>
                  <img
                    className={styles.ucalendarAltIcon}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.eWork}>E-Work</div>
                </div>
                <div className={styles.frameChild} />
                <div className={styles.ngyMai}>Mobishop</div>
                <div className={styles.frameChild} />
                <div className={styles.ngyTipTheo}>Lixil Ecommerce</div>
                <div className={styles.frameChild} />
                <div className={styles.ngyMai}>Panoee</div>
                <div className={styles.frameChild} />
                <div className={styles.ngyTipTheo}>Travel Booking</div>
              </div>
            </div>
          </div>
          <img className={styles.line16Stroke} alt="" src="/oval-copy-3.svg" />
        </div>
      </div>
      {isMoreOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMore}
        >
          <More2 onClose={closeMore} />
        </PortalPopup>
      )}
    </>
  );
};

export default More1;
