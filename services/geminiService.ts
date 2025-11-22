import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PRODUCTS } from "../constants";

// Initialize the Gemini API client
// Note: In a real environment, ensure process.env.API_KEY is set.
// For this demo, we assume the key is available or handled via a proxy if strictly frontend.
const apiKey = process.env.API_KEY || 'YOUR_API_KEY_HERE'; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Bạn là một Chuyên gia tư vấn máy phát điện (AI Consultant) của công ty VNGPOWER. 
Nhiệm vụ của bạn là giúp khách hàng chọn lựa máy phát điện phù hợp dựa trên nhu cầu của họ.

Dữ liệu sản phẩm hiện có của VNGPOWER:
${JSON.stringify(PRODUCTS.map(p => ({ name: p.name, brand: p.brand, kva: p.kva, usage: p.shortDescription })))}

Quy tắc tư vấn:
1. Luôn tỏ ra chuyên nghiệp, lịch sự, tin cậy (Tone: Professional, Trustworthy, Helpful).
2. Nếu khách hàng cung cấp thiết bị họ muốn dùng (ví dụ: 1 thang máy, 5 máy lạnh, 10 bóng đèn), hãy ước tính tổng công suất tiêu thụ (kW) và quy đổi ra kVA (hệ số cos phi 0.8). Công thức: kVA = kW / 0.8.
3. Sau khi tính toán, hãy đề xuất các dòng máy (Cummins, Hyundai, Baudouin...) có công suất phù hợp (lớn hơn công suất tính toán khoảng 20-25% để an toàn).
4. Nếu khách hàng hỏi về giá, hãy khéo léo mời họ để lại số điện thoại hoặc nhấn nút "Yêu cầu báo giá" vì giá máy phát điện biến động theo thị trường và cấu hình.
5. Luôn nhắc đến "VNGPOWER" là đơn vị uy tín, bảo hành 24 tháng.

Đừng bịa đặt thông số kỹ thuật không có thực. Nếu không chắc, hãy khuyên khách hàng liên hệ Hotline.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      console.warn("Gemini API Key is missing. Returning mock response.");
      return "Xin chào, hiện tại hệ thống AI đang bảo trì (thiếu API Key). Vui lòng liên hệ Hotline 0909 123 456 để được tư vấn trực tiếp.";
    }

    const model = 'gemini-2.5-flash';
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Xin lỗi, tôi chưa hiểu rõ ý bạn. Bạn có thể mô tả chi tiết hơn về nhu cầu sử dụng điện không?";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Đã có lỗi xảy ra khi kết nối với chuyên gia AI. Vui lòng thử lại sau hoặc gọi Hotline.";
  }
};
