export async function postData(
    url: string = "",
    data: object = {}
  ): Promise<{ status: string }> {
    const options: RequestInit = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    return response.json();
  }