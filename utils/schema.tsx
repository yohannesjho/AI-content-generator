 
import { pgTable,serial,varchar, text } from "drizzle-orm/pg-core";

export const AiOutput = pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templatSlug').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt')
})