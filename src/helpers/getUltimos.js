export const getUltimos = async () => {
  const url = "http://localhost:8080/ultimos"
 
  const result = await fetch(url);
  const data = await result.json();
 
  return data.ultimos;
}