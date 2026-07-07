export type Category = {
  name: string;
  items: string[];
};

export type Division = {
  id: string;
  label: string;
  intro: string;
  categories: Category[];
};

export const DIVISIONS: Division[] = [
  {
    id: "oils",
    label: "Essential Oils & Botanicals",
    intro:
      "Essential oils, carrier oils, herbal extracts and floral waters extracted using steam distillation and cold pressing to preserve natural aroma and properties.",
    categories: [
      {
        name: "Citrus Essential Oils",
        items: ["Lemon", "Orange", "Sweet Orange", "Bitter Orange", "Bergamot", "Grapefruit", "Lime", "Mandarin"],
      },
      {
        name: "Floral Essential Oils",
        items: ["Lavender", "Rose", "Jasmine", "Geranium", "Chamomile", "Neroli", "Ylang Ylang"],
      },
      {
        name: "Herbal Essential Oils",
        items: ["Peppermint", "Spearmint", "Basil", "Rosemary", "Oregano", "Thyme", "Sage"],
      },
      {
        name: "Spice Essential Oils",
        items: [
          "Clove", "Cinnamon Bark", "Cinnamon Leaf", "Cardamom", "Black Pepper",
          "Nutmeg", "Ginger", "Fennel", "Coriander", "Cumin",
        ],
      },
      {
        name: "Wood & Resin Essential Oils",
        items: ["Sandalwood", "Cedarwood", "Frankincense", "Myrrh", "Agarwood (Oud)", "Pine"],
      },
      {
        name: "Leaf Essential Oils",
        items: ["Eucalyptus", "Tea Tree", "Lemongrass", "Citronella", "Patchouli", "Tulsi", "Neem", "Palmarosa"],
      },
      {
        name: "Carrier Oils",
        items: [
          "Sweet Almond", "Coconut", "Jojoba", "Argan", "Grapeseed", "Sesame",
          "Castor", "Avocado", "Olive", "Sunflower", "Apricot Kernel", "Rosehip Seed",
          "Wheat Germ", "Moringa", "Black Seed",
        ],
      },
      {
        name: "Herbal Extracts",
        items: [
          "Aloe Vera", "Green Tea", "Ashwagandha", "Turmeric", "Neem", "Tulsi",
          "Licorice", "Amla", "Brahmi", "Shatavari", "Guduchi", "Hibiscus",
        ],
      },
      {
        name: "Floral Waters (Hydrosols)",
        items: ["Rose Water", "Lavender Water", "Chamomile Water", "Neroli Water", "Peppermint Water", "Rosemary Water"],
      },
    ],
  },
  {
    id: "chemicals",
    label: "Specialty & Industrial Chemicals",
    intro:
      "Industrial chemicals, specialty additives, solvents and cosmetic ingredients sourced from reliable manufacturers for diverse industrial applications.",
    categories: [
      {
        name: "Industrial Chemicals",
        items: [
          "Acetic Acid", "Citric Acid", "Phosphoric Acid", "Sulfuric Acid", "Hydrochloric Acid",
          "Nitric Acid", "Caustic Soda", "Soda Ash", "Sodium Bicarbonate", "Potassium Hydroxide",
          "Sodium Hydroxide", "Calcium Chloride", "Ammonium Chloride", "Magnesium Sulphate",
          "Sodium Sulphate", "Sodium Nitrate", "Potassium Nitrate", "Sodium Metabisulphite",
          "Sodium Bisulphite", "Hydrogen Peroxide",
        ],
      },
      {
        name: "Specialty Chemicals",
        items: [
          "Silicone Emulsions", "Silicone Oils", "Defoamers", "Antifoaming Agents", "Wetting Agents",
          "Dispersing Agents", "Surfactants", "Emulsifiers", "Chelating Agents", "Preservatives",
          "Polymer Additives", "Processing Aids", "Water Treatment Chemicals", "Corrosion Inhibitors",
          "Scale Inhibitors", "Biocides", "Industrial Enzymes", "Specialty Solvents",
        ],
      },
      {
        name: "Solvents",
        items: [
          "Isopropyl Alcohol (IPA)", "Ethanol", "Methanol", "Acetone", "Toluene", "Xylene",
          "MEK", "MIBK", "Ethyl Acetate", "Butyl Acetate", "Hexane", "Mineral Turpentine Oil",
        ],
      },
      {
        name: "Food & Pharma Ingredients",
        items: [
          "Propylene Glycol", "Glycerine", "Sorbitol", "Sodium Benzoate", "Potassium Sorbate",
          "Ascorbic Acid", "Xanthan Gum", "Sodium Citrate",
        ],
      },
      {
        name: "Cosmetic Ingredients",
        items: [
          "Glycols", "Emollients", "Preservatives", "Emulsifiers", "Surfactants",
          "Silicone Fluids", "Cosmetic Additives", "Conditioning Agents", "pH Adjusters", "Thickening Agents",
        ],
      },
    ],
  },
  {
    id: "foods",
    label: "Dehydrated Foods",
    intro:
      "Naturally dried vegetables, fruits, herbs and spices processed with modern dehydration technology to preserve colour, flavour and nutritional value.",
    categories: [
      {
        name: "Dehydrated Onion Products",
        items: [
          "White Onion Flakes", "White Onion Chopped", "White Onion Minced", "White Onion Granules",
          "White Onion Powder", "Red Onion Flakes", "Red Onion Chopped", "Red Onion Granules",
          "Red Onion Powder", "Pink Onion Products",
        ],
      },
      {
        name: "Dehydrated Garlic Products",
        items: ["Garlic Flakes", "Garlic Chopped", "Garlic Minced", "Garlic Granules", "Garlic Powder", "Toasted Garlic", "Roasted Garlic Powder"],
      },
      {
        name: "Dehydrated Vegetable Products",
        items: [
          "Tomato Powder", "Tomato Flakes", "Carrot Powder", "Carrot Flakes", "Beetroot Powder",
          "Beetroot Flakes", "Spinach Powder", "Spinach Flakes", "Cabbage Flakes", "Green Peas",
          "Potato Flakes", "Potato Granules", "Pumpkin Powder", "Sweet Corn Powder", "Bell Pepper Flakes",
          "Green Chili Flakes", "Chili Powder",
        ],
      },
      {
        name: "Dehydrated Leafy Herbs",
        items: [
          "Mint Leaves", "Coriander Leaves", "Curry Leaves", "Basil Leaves", "Parsley",
          "Dill Leaves", "Fenugreek Leaves (Kasuri Methi)", "Oregano", "Rosemary", "Thyme",
        ],
      },
      {
        name: "Dehydrated Fruit Products",
        items: [
          "Mango Powder", "Banana Powder", "Pineapple Powder", "Apple Powder", "Lemon Powder",
          "Orange Powder", "Papaya Powder", "Strawberry Powder", "Pomegranate Powder",
          "Guava Powder", "Coconut Powder",
        ],
      },
      {
        name: "Dehydrated Spice Products",
        items: [
          "Ginger Powder", "Ginger Flakes", "Turmeric Powder", "Tamarind Powder", "Coriander Powder",
          "Cumin Powder", "Black Pepper Powder", "Clove Powder", "Cinnamon Powder", "Cardamom Powder",
        ],
      },
      {
        name: "Spray-Dried Food Powders",
        items: ["Tomato Powder", "Onion Powder", "Garlic Powder", "Mango Powder", "Lemon Powder", "Coconut Milk Powder", "Fruit Blends", "Vegetable Blends"],
      },
      {
        name: "Customized Food Ingredients",
        items: ["Vegetable Mixes", "Soup Ingredients", "Ready-to-Cook Blends", "Instant Seasoning Mixes", "Customized Powder Blends", "OEM Food Ingredients"],
      },
    ],
  },
];