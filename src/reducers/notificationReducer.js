var timer = 0;

const notificationReducer = (state = null, action) => {
  const { type, data } = action;
  switch (type) {
    case "DISPLAY_NOTIFICATION":
      return data.message;
    case "CLEAR_NOTIFICATION":
      return null;
    default:
      return state;
  }
};

const setNotification = (message) => {
  return {
    type: "DISPLAY_NOTIFICATION",
    data: { message }
  }
}

const clearNotification = () => ({
  type: "CLEAR_NOTIFICATION"
})

export const setNotificationMessage = (message, duration) => {
  clearTimeout(timer)
  return async dispatch => {
    await dispatch(setNotification(message))
    timer = setTimeout(async () =>
    await dispatch(clearNotification()),
    duration * 1000
    )
  };
};

export default notificationReducer;