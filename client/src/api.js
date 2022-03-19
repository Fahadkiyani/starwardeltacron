export const devURI = "http://localhost:5000";
export const prodURI = "";
export const url = process.env.NODE_ENV === "production" ? prodURI : devURI
