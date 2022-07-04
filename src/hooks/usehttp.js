const { REACT_APP_BASE_URL } = process.env;

export const useHttp = () => {
  const request = async ({
    url = "",
    method = "GET",
    headers = {},
    body = null,
    token = false,
  }) => {
    if (token) {
      headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
      headers["Content-Type"] = "application/json";
    }

    let bd =await method === "POST" || method === "PUT"
        ? JSON.stringify(body)
        : body;

    let res = await fetch(`${REACT_APP_BASE_URL}${url}`, {
      method,
      body: bd,
      headers,
    }).then((res) => res.json());
    if (res.success) {
      console.log(res);
      return res;
    } else return new Error(res?.message || "something was wrong");
  };

  return { request };
};
