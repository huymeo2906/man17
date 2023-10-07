import { useCallback } from "react";
import styles from "./Calendar.module.css";

const Calendar = () => {
  const onFrameContainer1Click = useCallback(() => {
    // Please sync "My Tasks / Calendar / Month" to the project
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "My Tasks / 2 Weeks" to the project
  }, []);

  return (
    <div className={styles.calendar}>
      <div className={styles.unionWrapper}>
        <img className={styles.unionIcon} alt="" src="/union1.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.thngWrapper} onClick={onFrameContainer1Click}>
          <div className={styles.thng}>Tháng</div>
        </div>
        <div className={styles.tunWrapper} onClick={onFrameContainer2Click}>
          <div className={styles.thng}>2 tuần</div>
        </div>
        <div className={styles.tunContainer}>
          <div className={styles.thng}>Tuần</div>
        </div>
        <div className={styles.tunContainer}>
          <div className={styles.thng}>Ngày</div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
