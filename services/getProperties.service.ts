import axios from "axios"

const apiURL =
  "https://www.tokkobroker.com//api/v1/property/?lang=es_ar&format=json&key=5940ea45eb7cfb55228bec0b958ea9c0be151757"

const getProperties = async () => {
  const axiosHeaders = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  const res = await axios.get(apiURL, axiosHeaders)

  return res
}

export default getProperties
