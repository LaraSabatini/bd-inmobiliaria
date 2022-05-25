import axios from "axios"

const getProperty = async (id: number) => {
  const axiosHeaders = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  const res = await axios.get(
    `https://tokkobroker.com/api/v1/property/${id}/?lang=es_ar&format=json&key=5940ea45eb7cfb55228bec0b958ea9c0be151757`,
    axiosHeaders,
  )

  return res
}

export default getProperty
