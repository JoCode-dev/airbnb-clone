import { Listing, Reservation, User } from "@prisma/client";

export type SafeListings = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeReservation = Omit<
  Reservation,
  "createdDate" | "startDate" | "endDate" | "Listing"
> & {
  createdDate: string;
  startDate: string;
  endDate: string;
  Listing: SafeListings;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
