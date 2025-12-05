// lib/api.ts


export type DeviceInfo = {
  deviceName: string;
  deviceType?: string; 
  brand: string;
  model: string;
  description: string;
  image: string | null;
  specifications: Record<string, string>;
  source: string;
  apiSuccess: boolean;
  [key: string]: any;
};


export async function fetchPhoneSpecs(brand: string, model: string, deviceType?: string): Promise<DeviceInfo> {
  try {
    const deviceName = `${brand} ${model}`;
    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(deviceName)}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch device info from Wikipedia');
    }
    
    const data = await response.json();
    
    // Generate realistic specifications based on brand and model
    const specifications = generateSpecifications(brand, model, deviceType);
    
    return {
      deviceName: data.title || deviceName,
      deviceType: deviceType || determineDeviceType(brand, model),
      brand,
      model,
      description: data.extract || 'No description available',
      image: data.thumbnail?.source || null,
      specifications,
      source: 'Wikipedia API',
      apiSuccess: true
    };
    
  } catch (error) {
    console.error('Error fetching device specs:', error);
    
    // Fallback data if API fails
    return {
      deviceName: `${brand} ${model}`,
      deviceType: deviceType || 'smartphone',
      brand,
      model,
      description: 'Device information could not be fetched from API. Using local data.',
      specifications: generateSpecifications(brand, model, deviceType),
      source: 'Local Data',
      apiSuccess: false
    };
  }
}

export async function fetchDeviceInfo(deviceName: string) {
  try {
    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(deviceName)}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch device info');
    }
    
    const data = await response.json();
    
    return {
      success: true,
      deviceName: data.title,
      description: data.extract,
      image: data.thumbnail?.source,
      source: 'Wikipedia API'
    };
    
  } catch (error) {
    console.error('Error fetching device info:', error);
    return {
      success: false,
      deviceName: deviceName,
      description: 'Device information not available from API',
      source: 'Local Data'
    };
  }
}

function determineDeviceType(brand: string, model: string): string {
  const modelLower = model.toLowerCase();
  if (modelLower.includes('iphone') || modelLower.includes('galaxy') || modelLower.includes('pixel')) {
    return 'smartphone';
  } else if (modelLower.includes('macbook') || modelLower.includes('xps') || modelLower.includes('thinkpad')) {
    return 'laptop';
  } else if (modelLower.includes('ipad') || modelLower.includes('tab')) {
    return 'tablet';
  } else if (modelLower.includes('watch')) {
    return 'smartwatch';
  } else {
    return 'other';
  }
}

function generateSpecifications(brand: string, model: string, deviceType?: string): Record<string, string> {
  const specs: Record<string, string> = {};
  const brandLower = brand.toLowerCase();
  const modelLower = model.toLowerCase();
  const type = deviceType || determineDeviceType(brand, model);
  
  // Add basic specifications
  specs.brand = brand;
  specs.model = model;
  specs.type = type.charAt(0).toUpperCase() + type.slice(1);
  
  // Determine device type based on model or provided type
  if (type === 'smartphone') {
    specs.display = brandLower === 'apple' ? '6.1-inch Super Retina XDR' : '6.2-inch Dynamic AMOLED';
    specs.processor = brandLower === 'apple' ? 'A15 Bionic' : 'Snapdragon 8 Gen 2';
    specs.ram = brandLower === 'apple' ? '6GB' : '8GB';
    specs.storage = '128GB/256GB/512GB';
    specs.battery = 'Up to 20 hours video playback';
    specs.camera = 'Dual/Triple camera system';
  } else if (type === 'laptop') {
    specs.display = '13.3-inch/14-inch/15.6-inch Retina/FHD/4K';
    specs.processor = brandLower === 'apple' ? 'Apple M2/M3' : 'Intel Core i5/i7 or AMD Ryzen 5/7';
    specs.ram = '8GB/16GB/32GB';
    specs.storage = '256GB/512GB/1TB SSD';
    specs.graphics = 'Integrated/Discrete GPU';
    specs.battery = 'Up to 18 hours';
  } else if (type === 'tablet') {
    specs.display = '10.2-inch/10.9-inch/12.9-inch Retina Display';
    specs.processor = brandLower === 'apple' ? 'Apple M1/A14 Bionic' : 'Snapdragon 8cx/MediaTek Dimensity';
    specs.ram = '4GB/8GB';
    specs.storage = '64GB/128GB/256GB';
    specs.battery = 'Up to 10 hours';
  } else {
    specs.display = 'Various sizes available';
    specs.processor = 'Processor varies by model';
    specs.ram = 'Memory varies by model';
    specs.storage = 'Storage varies by model';
    specs.battery = 'Battery life varies';
  }
  

  if (brandLower === 'apple') {
    specs.os = type === 'smartphone' ? 'iOS' :
               type === 'laptop' ? 'macOS' :
               type === 'tablet' ? 'iPadOS' : 'Apple OS';
  } else if (brandLower === 'microsoft') {
    specs.os = 'Windows';
  } else if (brandLower === 'google') {
    specs.os = type === 'laptop' ? 'Chrome OS' : 'Android';
  } else {
    specs.os = 'Operating System varies';
  }
  
  return specs;
}
