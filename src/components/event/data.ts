export interface Events {
    id: number;
    image: string;
    title: string;
    disc: string;
    description: string;
    termsAndConditions: string[];
  }
  
  export const events: Events[] = [
    {
      id: 1,
      image: "/acara4.jpg",
      title: "Live Music Night",
      disc: "10",
      description: "Enjoy live performances by local bands every Saturday night with 10% off on all beverages!",
      termsAndConditions: [
        "Offer valid only during live performances (8 PM - 11 PM)",
        "10% discount applies to beverages only",
        "No reservations required",
        "Subject to availability",
      ],
    },
    {
      id: 2,
      image: "/acara3.jpg",
      title: "Happy Hour Deals",
      disc: "50",
      description: "50% off on selected drinks during Happy Hour every weekday from 5 PM to 7 PM!",
      termsAndConditions: [
        "Offer valid Monday - Friday, 5 PM to 7 PM",
        "Selected drinks only (ask your server for details)",
        "Cannot be combined with other promotions",
        "Dine-in only",
      ],
    },
    {
      id: 3,
      image: "/acara.jpg",
      title: "Special Dinner Combo",
      disc: "30",
      description: "Get 30% off on our special dinner combo every Friday night!",
      termsAndConditions: [
        "Offer valid on Fridays from 6 PM to 9 PM",
        "Includes appetizer, main course, and dessert",
        "30% discount applies to combo meals only",
        "Dine-in only",
      ],
    },
    {
      id: 4,
      image: "/acara2.jpg",
      title: "Weekend Brunch Special",
      disc: "20",
      description: "Join us for a relaxing weekend brunch with 20% off on all main courses!",
      termsAndConditions: [
        "Offer valid on Saturdays and Sundays, 10 AM - 2 PM",
        "20% discount on main courses only",
        "Cannot be combined with other promotions",
        "Dine-in only",
      ],
    },
  ];
  