import {Prop,Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
    @Prop({required: true})
    title: string;

    @Prop()
    description: string;

    @Prop({default: false})
    isDone: boolean;
}
export const TaskSchema = SchemaFactory.createForClass(Task)