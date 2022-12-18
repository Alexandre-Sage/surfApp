import { AllowedSchema, Validator } from "express-json-validator-middleware";
import Joi from "joi";
import { SessionInterface } from "../../../mongoDb/sessions/sessionInterface";
export const sessionBodyValidationSchema: Joi.ObjectSchema<SessionInterface> = Joi.object({
  spotId: Joi.string().required(),
  startTime: Joi.date().required(),
  endTime: Joi.date().required(),
  date: Joi.date().required(),
  swell: Joi.object({
    period: Joi.string().required(),
    size: Joi.string().required(),
    orientation: Joi.string().required(),
  }).required(),
  wind: Joi.object({
    orientation: Joi.string().required(),
    strength: Joi.string().required()
  }).required(),
  comment: Joi.string()
})



/* export const sessionBodyValidationSchema: AllowedSchema = {
  type: "object",
  required: ["spotId", "startTime", "endTime", "date", "swell", "wind"],
  properties: {
    spotId: {
      type: "string",
    },
    startTime: {
      type: "string"
    },
    endTime: {
      type: "string"
    },
    date: {
      type: "string"
    },
    swell: {
      type: "object",
      properties: {
        size: {
          type: "string",
        },
        period: {
          type: "string",
        },
        orientation: {
          type: "string"
        }
      }
    },
    wind: {
      type: "object",
      properties: {
        strength: {
          type: "string",
        },
        orientation: {
          type: "string"
        }
      }
    },
    comment: {
      type: "string"
    }
  }
}; */