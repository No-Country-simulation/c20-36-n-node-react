const apiBaseUrl = 'https://c20-36-n-node-react.onrender.com/api/v1';

export async function dataApiRequest(endpoint: string, method: 'GET' | 'POST' | 'PATCH', body?: any) {
  const headers = {
    'Content-Type': 'application/json',
    // Incluir token de autenticación si es necesario
    // 'Authorization': `Bearer ${token}`,
  };

  const options: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(`${apiBaseUrl}${endpoint}`, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Error en la solicitud');
  }

  return data;
}
