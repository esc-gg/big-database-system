export const fetchTotal = async (userName: string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}api/match/total/${userName}`);
    const data = await response.json();
    return Promise.resolve(data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const fetchDuration = async (userName: string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}api/match/duration/${userName}`);
    const data = await response.json();
    return Promise.resolve(data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const fetchLane = async (userName: string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}api/match/lane/${userName}`);
    const data = await response.json();
    return Promise.resolve(data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};
