import axios, { AxiosResponse } from "axios";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export async function getData() {
  try {
    const response: AxiosResponse<User[]> = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userIds = response.data.map((user) => user.id);
    return userIds;
  } catch (error) {
    console.error(error);
  }
}
