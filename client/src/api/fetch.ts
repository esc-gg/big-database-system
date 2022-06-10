export const fetchTotal = async (userName: string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}api/match/total/${userName}`);
    const data = await response.json();
    console.log(data);
    return Promise.resolve(data);
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};
