import User from "../../../assets/user-settings-01.svg";

const mapAlarmHistory = (alarm: any, index: number) => {
  return {
    id: index,
    name: "teste",
    department: "N/A",
    function: "N/A",
    access: "N/A",
    actions: [
      {
        buttonType: "icon",
        event: "edit",
        icon: (
          <img src={User} alt="" style={{ width: "24px", cursor: "pointer" }} />
        ),
        label: "Edit User",
      },
    ],
  };
};

export const mapAlarmHistoryList = (alarmHistory: any) => {
  return alarmHistory.map((alarm: any, index: number) =>
    mapAlarmHistory(alarm, index)
  );
};
