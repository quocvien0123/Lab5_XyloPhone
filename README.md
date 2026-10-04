# Lab 05 - Xylophone

Sinh viên: **Nguyễn Anh Tuấn**  
MSSV: **23IT297**  
Lớp: **23SE2**  

---

## 1. Mục tiêu Lab
Xây dựng ứng dụng đàn Xylophone gồm 7 phím nhạc tương ứng với 7 nốt (C, D, E, F, G, A, B). Thực hành tích hợp module âm thanh hiện đại trong hệ sinh thái Expo/React Native, quản lý vòng đời phát âm thanh mượt mà và không gây crash khi bấm liên tục.

## 2. Công nghệ sử dụng
- **React Native** (v0.86.3)
- **TypeScript**
- **Expo SDK** (~57.0.25)
- **Expo Status Bar**
- Các component cơ bản: `View`, `Text`, `Pressable`, `StyleSheet`

## 3. Package audio đã sử dụng
- **`expo-audio`** (~57.0.5): Thư viện âm thanh chính thức thế hệ mới của Expo dành cho SDK 52+ / SDK 57, tích hợp sẵn trong Expo Go.
- **`expo-asset`** (~57.0.0): Module quản lý nạp asset âm thanh cục bộ.
- Sử dụng hook `useAudioPlayer` để quản lý vòng đời phát âm thanh tự động, tối ưu tài nguyên và tái sử dụng player cho từng phím.

## 4. Danh sách 7 phím & Nốt âm thanh
- **Phím C**: Nốt Đô (C4 - 261.63 Hz) • Màu Rose Red (`#E11D48`) -> `note1.mp3`
- **Phím D**: Nốt Rê (D4 - 293.66 Hz) • Màu Orange (`#EA580C`) -> `note2.mp3`
- **Phím E**: Nốt Mi (E4 - 329.63 Hz) • Màu Amber (`#D97706`) -> `note3.mp3`
- **Phím F**: Nốt Fa (F4 - 349.23 Hz) • Màu Emerald Green (`#059669`) -> `note4.mp3`
- **Phím G**: Nốt Sol (G4 - 392.00 Hz) • Màu Cyan/Teal (`#0891B2`) -> `note5.mp3`
- **Phím A**: Nốt La (A4 - 440.00 Hz) • Màu Royal Blue (`#2563EB`) -> `note6.mp3`
- **Phím B**: Nốt Si (B4 - 493.88 Hz) • Màu Violet (`#7C3AED`) -> `note7.mp3`

## 5. Cách chạy project

### Cài đặt dependencies:
```bash
npm install
```

### Khởi chạy ứng dụng:
```bash
npx expo start
```

- Nhấn phím `a` trên terminal để mở trực tiếp trên **Android Emulator**.
- Hoặc quét mã QR bằng ứng dụng **Expo Go** trên thiết bị thật.
"# Lab3_Dicee" 
