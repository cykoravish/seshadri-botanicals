export type ProductGroup = {
  id: string;
  label: string;
  intro: string;
  items: string[];
  note?: string;
};

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    id: "industrial",
    label: "Industrial Chemicals",
    intro: "Bulk industrial chemicals for manufacturing, processing and treatment applications.",
    items: [
      "Acetic Acid", "Citric Acid", "Phosphoric Acid", "Sulfuric Acid", "Hydrochloric Acid",
      "Nitric Acid", "Caustic Soda", "Soda Ash", "Sodium Bicarbonate", "Potassium Hydroxide",
      "Sodium Hydroxide", "Calcium Chloride", "Ammonium Chloride", "Magnesium Sulphate",
      "Sodium Sulphate", "Sodium Nitrate", "Potassium Nitrate", "Sodium Metabisulphite",
      "Sodium Bisulphite", "Hydrogen Peroxide",
    ],
  },
  {
    id: "specialty",
    label: "Specialty Chemicals",
    intro: "Performance additives and specialty chemicals for formulators and OEMs.",
    items: [
      "Silicone Emulsions", "Silicone Oils", "Defoamers", "Antifoaming Agents", "Wetting Agents",
      "Dispersing Agents", "Surfactants", "Emulsifiers", "Chelating Agents", "Preservatives",
      "Polymer Additives", "Processing Aids", "Water Treatment Chemicals", "Corrosion Inhibitors",
      "Scale Inhibitors", "Biocides", "Industrial Enzymes", "Specialty Solvents",
      "Crosslinking Agents", "Curing Agents", "Flame Retardants", "UV Stabilizers",
      "Antioxidants", "Plastic Additives", "Adhesive Additives", "Coating Additives",
    ],
  },
  {
    id: "solvents",
    label: "Solvents",
    intro: "Industrial and laboratory-grade solvents in bulk and packaged quantities.",
    items: [
      "Isopropyl Alcohol (IPA)", "Ethanol", "Methanol", "Acetone", "Toluene", "Xylene", "MEK",
      "MIBK", "Ethyl Acetate", "Butyl Acetate", "Hexane", "Mineral Turpentine Oil",
    ],
  },
  {
    id: "food-pharma",
    label: "Food & Pharma Ingredients",
    intro: "Ingredients for food processing and pharmaceutical manufacturing.",
    items: [
      "Propylene Glycol", "Glycerine", "Sorbitol", "Sodium Benzoate", "Potassium Sorbate",
      "Ascorbic Acid", "Xanthan Gum", "Citric Acid", "Sodium Citrate",
    ],
    note: "*Supplied according to customer specifications and applicable regulations.",
  },
  {
    id: "cosmetic",
    label: "Cosmetic Ingredients",
    intro: "Ingredients for cosmetic and personal care manufacturing.",
    items: [
      "Glycols", "Emollients", "Preservatives", "Emulsifiers", "Surfactants", "Silicone Fluids",
      "Cosmetic Additives", "Conditioning Agents", "pH Adjusters", "Thickening Agents",
    ],
  },
];

export const INDUSTRIES = [
  "Paints & Coatings", "Adhesives & Sealants", "Construction Chemicals", "Water Treatment",
  "Textile Processing", "Leather Industry", "Pharmaceutical Manufacturing", "Cosmetic Manufacturing",
  "Personal Care", "Food Processing", "Agriculture", "Rubber Industry", "Plastics & Polymers",
  "Packaging", "Paper & Pulp", "Printing Inks", "Soap & Detergents", "Automotive", "Electronics",
  "Metal Treatment",
];

export const PACKAGING = [
  "500 ml Bottles", "1 Litre Bottles", "5 Litre Cans", "25 Kg Bags", "25 Kg HDPE Containers",
  "50 Kg Drums", "200 Kg Drums", "IBC Totes", "Tanker Loads", "Custom Packaging",
];

export const DOCUMENTS = [
  "Certificate of Analysis (COA)", "Technical Data Sheet (TDS)", "Safety Data Sheet (SDS)",
  "Certificate of Origin", "Packing List", "Commercial Invoice", "Batch Information",
  "Product Specifications", "Other applicable technical or shipping documents",
];

export const EXPORT_MARKETS = [
  "Asia", "Middle East", "Africa", "Europe", "North America", "South America", "Australia",
];

export const INQUIRY_FROM = [
  "Manufacturers", "Industrial Users", "Distributors", "Wholesalers", "Importers", "Exporters",
  "OEMs", "Formulators", "Research Organizations", "Trading Companies",
];

export const BUSINESS_MODEL = [
  "Domestic chemical sourcing", "International sourcing", "Import and distribution", "Export supply",
  "Wholesale trading", "Industrial chemical distribution", "Specialty chemical sourcing",
  "Customized procurement", "Bulk supply solutions",
];

export const FAQS = [
  { q: "Is Seshadri Chemicals a separate company?", a: "Seshadri Chemicals is a division/business division of Seshadri Trading Company. It operates as the dedicated chemical business and customer-facing brand for specialty chemicals, industrial chemicals, chemical trading, sourcing, distribution, and related activities." },
  { q: "Do you manufacture these chemicals?", a: "Our portfolio includes products sourced from qualified manufacturers and suppliers, together with trading, distribution, import, export, and customized sourcing solutions. Product availability and supply arrangements depend on the specific chemical." },
  { q: "Can you supply bulk quantities?", a: "Yes. We support bulk industrial requirements, wholesale orders, export shipments, and container-load quantities, subject to product availability." },
  { q: "Do you provide OEM or private labeling?", a: "Private labeling and customized packaging may be available for selected products, subject to product type, supplier arrangements, regulatory requirements, and minimum order quantities." },
  { q: "Can you source chemicals not listed on your website?", a: "Yes. We offer customized chemical sourcing services based on customer requirements. Customers can provide the product name, CAS number, technical specification, application, required quantity, and destination." },
  { q: "Are COA, TDS, and SDS available?", a: "Relevant technical documentation can be provided where applicable and subject to availability from the manufacturer or supplier." },
  { q: "Do you supply internationally?", a: "Yes. Seshadri Chemicals explores export opportunities and international supply requirements across selected global markets, subject to product-specific regulations, logistics, and destination-country requirements." },
];

export const CONTACT_EMAIL = "seshadriechemicals@gmail.com";
