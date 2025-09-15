import {
  type User,
  type InsertUser,
  type Contact,
  type InsertContact,
  type BlogPost,
  type InsertBlogPost,
  type Testimonial,
  type InsertTestimonial,
  type CaseStudy,
  type InsertCaseStudy,
  type ServiceBooking,
  type InsertServiceBooking,
  type ClientProject,
  type InsertClientProject,
  users,
  contacts,
  blogPosts,
  testimonials,
  caseStudies,
  serviceBookings,
  clientProjects,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, like, or } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Contact operations
  getContact(id: string): Promise<Contact | undefined>;
  getContacts(limit?: number, status?: string): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
  updateContactStatus(id: string, status: string): Promise<Contact | undefined>;

  // Blog post operations
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getBlogPosts(limit?: number, featured?: boolean): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, updates: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<boolean>;

  // Testimonial operations
  getTestimonial(id: string): Promise<Testimonial | undefined>;
  getTestimonials(limit?: number, approved?: boolean): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  updateTestimonialApproval(id: string, isApproved: boolean): Promise<Testimonial | undefined>;

  // Case study operations
  getCaseStudy(id: string): Promise<CaseStudy | undefined>;
  getCaseStudies(limit?: number, featured?: boolean): Promise<CaseStudy[]>;
  createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy>;
  updateCaseStudy(id: string, updates: Partial<InsertCaseStudy>): Promise<CaseStudy | undefined>;
  deleteCaseStudy(id: string): Promise<boolean>;

  // Service booking operations
  getServiceBooking(id: string): Promise<ServiceBooking | undefined>;
  getServiceBookings(limit?: number, status?: string): Promise<ServiceBooking[]>;
  createServiceBooking(booking: InsertServiceBooking): Promise<ServiceBooking>;
  updateServiceBookingStatus(id: string, status: string): Promise<ServiceBooking | undefined>;

  // Client project operations
  getClientProject(id: string): Promise<ClientProject | undefined>;
  getClientProjects(limit?: number, status?: string): Promise<ClientProject[]>;
  createClientProject(project: InsertClientProject): Promise<ClientProject>;
  updateClientProject(id: string, updates: Partial<InsertClientProject>): Promise<ClientProject | undefined>;
  deleteClientProject(id: string): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(user: InsertUser): Promise<User> {
    const result = await db.insert(users).values(user).returning();
    return result[0];
  }

  // Contact operations
  async getContact(id: string): Promise<Contact | undefined> {
    const result = await db.select().from(contacts).where(eq(contacts.id, id)).limit(1);
    return result[0];
  }

  async getContacts(limit = 50, status?: string): Promise<Contact[]> {
    if (status) {
      return await db.select().from(contacts)
        .where(eq(contacts.status, status))
        .orderBy(desc(contacts.createdAt))
        .limit(limit);
    }
    
    return await db.select().from(contacts)
      .orderBy(desc(contacts.createdAt))
      .limit(limit);
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const result = await db.insert(contacts).values(contact).returning();
    return result[0];
  }

  async updateContactStatus(id: string, status: string): Promise<Contact | undefined> {
    const result = await db.update(contacts)
      .set({ status })
      .where(eq(contacts.id, id))
      .returning();
    return result[0];
  }

  // Blog post operations
  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    const result = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1);
    return result[0];
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const result = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
    return result[0];
  }

  async getBlogPosts(limit = 10, featured?: boolean): Promise<BlogPost[]> {
    if (featured !== undefined) {
      return await db.select().from(blogPosts)
        .where(eq(blogPosts.featured, featured))
        .orderBy(desc(blogPosts.publishedAt))
        .limit(limit);
    }
    
    return await db.select().from(blogPosts)
      .orderBy(desc(blogPosts.publishedAt))
      .limit(limit);
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const result = await db.insert(blogPosts).values(post).returning();
    return result[0];
  }

  async updateBlogPost(id: string, updates: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const result = await db.update(blogPosts)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return result[0];
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    const result = await db.delete(blogPosts).where(eq(blogPosts.id, id)).returning();
    return result.length > 0;
  }

  // Testimonial operations
  async getTestimonial(id: string): Promise<Testimonial | undefined> {
    const result = await db.select().from(testimonials).where(eq(testimonials.id, id)).limit(1);
    return result[0];
  }

  async getTestimonials(limit = 10, approved?: boolean): Promise<Testimonial[]> {
    if (approved !== undefined) {
      return await db.select().from(testimonials)
        .where(eq(testimonials.isApproved, approved))
        .orderBy(desc(testimonials.createdAt))
        .limit(limit);
    }
    
    return await db.select().from(testimonials)
      .orderBy(desc(testimonials.createdAt))
      .limit(limit);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const result = await db.insert(testimonials).values(testimonial).returning();
    return result[0];
  }

  async updateTestimonialApproval(id: string, isApproved: boolean): Promise<Testimonial | undefined> {
    const result = await db.update(testimonials)
      .set({ isApproved })
      .where(eq(testimonials.id, id))
      .returning();
    return result[0];
  }

  // Case study operations
  async getCaseStudy(id: string): Promise<CaseStudy | undefined> {
    const result = await db.select().from(caseStudies).where(eq(caseStudies.id, id)).limit(1);
    return result[0];
  }

  async getCaseStudies(limit = 10, featured?: boolean): Promise<CaseStudy[]> {
    if (featured !== undefined) {
      return await db.select().from(caseStudies)
        .where(eq(caseStudies.featured, featured))
        .orderBy(desc(caseStudies.createdAt))
        .limit(limit);
    }
    
    return await db.select().from(caseStudies)
      .orderBy(desc(caseStudies.createdAt))
      .limit(limit);
  }

  async createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy> {
    const result = await db.insert(caseStudies).values(caseStudy).returning();
    return result[0];
  }

  async updateCaseStudy(id: string, updates: Partial<InsertCaseStudy>): Promise<CaseStudy | undefined> {
    const result = await db.update(caseStudies)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(caseStudies.id, id))
      .returning();
    return result[0];
  }

  async deleteCaseStudy(id: string): Promise<boolean> {
    const result = await db.delete(caseStudies).where(eq(caseStudies.id, id)).returning();
    return result.length > 0;
  }

  // Service booking operations
  async getServiceBooking(id: string): Promise<ServiceBooking | undefined> {
    const result = await db.select().from(serviceBookings).where(eq(serviceBookings.id, id)).limit(1);
    return result[0];
  }

  async getServiceBookings(limit = 50, status?: string): Promise<ServiceBooking[]> {
    if (status) {
      return await db.select().from(serviceBookings)
        .where(eq(serviceBookings.status, status))
        .orderBy(desc(serviceBookings.createdAt))
        .limit(limit);
    }
    
    return await db.select().from(serviceBookings)
      .orderBy(desc(serviceBookings.createdAt))
      .limit(limit);
  }

  async createServiceBooking(booking: InsertServiceBooking): Promise<ServiceBooking> {
    const result = await db.insert(serviceBookings).values(booking).returning();
    return result[0];
  }

  async updateServiceBookingStatus(id: string, status: string): Promise<ServiceBooking | undefined> {
    const result = await db.update(serviceBookings)
      .set({ status })
      .where(eq(serviceBookings.id, id))
      .returning();
    return result[0];
  }

  // Client project operations
  async getClientProject(id: string): Promise<ClientProject | undefined> {
    const result = await db.select().from(clientProjects).where(eq(clientProjects.id, id)).limit(1);
    return result[0];
  }

  async getClientProjects(limit = 20, status?: string): Promise<ClientProject[]> {
    if (status) {
      return await db.select().from(clientProjects)
        .where(eq(clientProjects.status, status))
        .orderBy(desc(clientProjects.createdAt))
        .limit(limit);
    }
    
    return await db.select().from(clientProjects)
      .orderBy(desc(clientProjects.createdAt))
      .limit(limit);
  }

  async createClientProject(project: InsertClientProject): Promise<ClientProject> {
    const result = await db.insert(clientProjects).values(project).returning();
    return result[0];
  }

  async updateClientProject(id: string, updates: Partial<InsertClientProject>): Promise<ClientProject | undefined> {
    const result = await db.update(clientProjects)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(clientProjects.id, id))
      .returning();
    return result[0];
  }

  async deleteClientProject(id: string): Promise<boolean> {
    const result = await db.delete(clientProjects).where(eq(clientProjects.id, id)).returning();
    return result.length > 0;
  }
}

export const storage = new DatabaseStorage();
