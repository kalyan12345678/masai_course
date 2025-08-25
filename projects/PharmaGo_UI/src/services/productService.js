const medicines = [
  { id: "1", name: "Paracetamol 500mg", price: 50, category: "Pain Relief", brand: "MediCare" },
  { id: "2", name: "Amoxicillin 250mg", price: 120, category: "Antibiotics", brand: "PharmaPlus" },
  { id: "3", name: "Cetirizine 10mg", price: 80, category: "Allergy", brand: "HealthLife" },
  { id: "4", name: "Vitamin C 1000mg", price: 150, category: "Supplements", brand: "NutriBoost" },
  { id: "5", name: "Ibuprofen 400mg", price: 95, category: "Pain Relief", brand: "MediCare" },
  { id: "6", name: "Azithromycin 500mg", price: 180, category: "Antibiotics", brand: "PharmaPlus" },
  { id: "7", name: "Loratadine 10mg", price: 90, category: "Allergy", brand: "HealthLife" },
  { id: "8", name: "Calcium + Vitamin D3", price: 200, category: "Supplements", brand: "NutriBoost" },
  { id: "9", name: "Metformin 500mg", price: 110, category: "Diabetes", brand: "GlucoCare" },
  { id: "10", name: "Amlodipine 5mg", price: 85, category: "Hypertension", brand: "CardioSafe" },
  { id: "11", name: "Losartan 50mg", price: 140, category: "Hypertension", brand: "CardioSafe" },
  { id: "12", name: "Atorvastatin 20mg", price: 160, category: "Cholesterol", brand: "LipiGuard" },
  { id: "13", name: "Omeprazole 20mg", price: 100, category: "Gastric Care", brand: "DigestWell" },
  { id: "14", name: "Pantoprazole 40mg", price: 130, category: "Gastric Care", brand: "DigestWell" },
  { id: "15", name: "Fexofenadine 120mg", price: 145, category: "Allergy", brand: "HealthLife" },
  { id: "16", name: "Dolo 650", price: 70, category: "Pain Relief", brand: "MediCare" },
  { id: "17", name: "Cough Syrup (Dextromethorphan)", price: 95, category: "Cough & Cold", brand: "CoughShield" },
  { id: "18", name: "Vitamin B12 Tablets", price: 170, category: "Supplements", brand: "NutriBoost" },
  { id: "19", name: "Iron + Folic Acid", price: 150, category: "Supplements", brand: "NutriBoost" },
  { id: "20", name: "Ranitidine 150mg", price: 75, category: "Gastric Care", brand: "DigestWell" },
  { id: "21", name: "Insulin Injection 10ml", price: 250, category: "Diabetes", brand: "GlucoCare" },
  { id: "22", name: "Hydroxychloroquine 200mg", price: 200, category: "Antimalarial", brand: "PharmaPlus" },
  { id: "23", name: "Doxycycline 100mg", price: 130, category: "Antibiotics", brand: "PharmaPlus" },
  { id: "24", name: "Clarithromycin 500mg", price: 190, category: "Antibiotics", brand: "PharmaPlus" },
  { id: "25", name: "Cefixime 200mg", price: 175, category: "Antibiotics", brand: "PharmaPlus" },
  { id: "26", name: "Montelukast 10mg", price: 160, category: "Allergy", brand: "HealthLife" },
  { id: "27", name: "Salbutamol Inhaler", price: 220, category: "Asthma", brand: "BreathEZ" },
  { id: "28", name: "Budesonide Inhaler", price: 250, category: "Asthma", brand: "BreathEZ" },
  { id: "29", name: "Levothyroxine 50mcg", price: 130, category: "Thyroid", brand: "ThyroCare" },
  { id: "30", name: "Prednisolone 10mg", price: 140, category: "Steroids", brand: "PharmaPlus" }
];

export function getMedicines() {
  return medicines;
}
