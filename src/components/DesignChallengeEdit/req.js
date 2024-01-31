import axios from "axios";
import { URL } from "../../constants";

const url = `${URL}/processChallenge.php`;
const updateUrl = `${URL}/updateChallenge.php`;

export const submitChallenge = (
  challenge,
  messageCb,
  challengeCb,
  loadCb,
  showCb,
  history
) => {
  // eslint-disable-next-line no-unused-vars
  const { title, body, track, industry, deadline, attempts, id, attachment } =
    challenge;
  const { push } = history;
  if (title && body) {
    const dataTosubmit = {
      title: title,
      track: track || "",
      industry: industry || "",
      deadline,
      body: body,
      attachment,
    };
    loadCb(true);
    axios
      .post(url, dataTosubmit)
      .then((res) => {
        if (res.data.success === 1) {
          messageCb(res.data.msg + "😇");
          challengeCb({});
          loadCb(false);
          showCb(false);
          push("/design-challenge");
        } else {
          loadCb(false);
          messageCb(res.data.msg);
        }
      })
      .catch(() => {
        loadCb(false);
        messageCb("An error occurred! try again later");
      });
  } else {
    messageCb("Alaye! fill the required fields jare 😏");
  }
};

export const editChallenge = (
  challenge,
  messageCb,
  challengeCb,
  loadCb,
  showCb,
  history
) => {
  // eslint-disable-next-line no-unused-vars
  const { title, body, track, industry, deadline, attempts, id, attachment } =
    challenge;
  const { push } = history;
  if (title && body) {
    const dataToEdit = {
      title: title,
      track: track || "",
      industry: industry || "",
      deadline,
      body: body,
      id: id,
      attachment,
    };
    loadCb(true);
    axios
      .post(updateUrl, dataToEdit)
      .then((res) => {
        if (res.data.success === 1) {
          messageCb(res.data.msg + "😇");
          challengeCb({});
          loadCb(false);
          showCb(false);
          push("/design-challenge");
        } else {
          loadCb(false);
          messageCb(res.data.msg);
        }
      })
      .catch(() => {
        loadCb(false);
        messageCb("An error occurred! try again later");
      });
  } else {
    messageCb("Alaye! fill the required fields jare 😏");
  }
};
