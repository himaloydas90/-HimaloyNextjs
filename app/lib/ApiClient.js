// lib/apiClient.js

const BASE_URL = "https://dummyjson.com";

/**
 * Universal API Client
 * Works with: Next.js App Router (SSG, SSR, ISR) & Client Components
 */
async function request(
  endpoint,
  {
    method = "GET",
    body,
    headers = {},
    cache,       
    revalidate,  
    tags = [],
  } = {}
) {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      next: {},
    };

    if (cache) {
      options.cache = cache;
    }

    if (typeof revalidate !== 'undefined' && revalidate !== false) {
      options.next.revalidate = revalidate;
    }

    if (tags && tags.length > 0) {
      options.next.tags = tags;
    }


    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    
    if (!response.ok) {
      throw new Error(
        `API Error: ${response.status} ${response.statusText}`
      );
    }

   
    if (response.status === 204) {
      return {};
    }

    return await response.json();
  } catch (error) {
    console.error("API CLIENT ERROR:", error);
    throw error;
  }
}

export const apiClient = {
  get: (endpoint, options = {}) => 
    request(endpoint, { ...options, method: "GET" }),
    
  post: (endpoint, body, options = {}) => 
    request(endpoint, { ...options, method: "POST", body }),
    
  put: (endpoint, body, options = {}) => 
    request(endpoint, { ...options, method: "PUT", body }),
    
  patch: (endpoint, body, options = {}) => 
    request(endpoint, { ...options, method: "PATCH", body }),
    
  delete: (endpoint, options = {}) => 
    request(endpoint, { ...options, method: "DELETE" }),
};