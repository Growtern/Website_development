import mongoose from "mongoose";
import slugify from "slugify";

const jobCourseSchema = new mongoose.Schema(
    {
        courseTitle: {
            type: String,
            required: true,
            trim: true,
        },

        slug: {
            type: String,
            unique: true,
            lowercase: true,
        },

        nextBatchStartFrom: {
            type: Date,
            required: true,
        },

        syllabusPdf: {

            public_id: {
                type: String,
                default: "",
            },

            url: {
                type: String,
                default: "",
            },
        },

        image: {
            public_id: {
                type: String,
                default: "",
            },

            url: {
                type: String,
                default: "",
            },
        },

        curriculum: {
            type: String,
            required: true,
            trim: true,
        },

        plans: [
            {
                type: {
                    type: String,
                    enum: ["Standard", "Premium"],
                    required: true,
                },

                mode: {
                    type: String,
                    enum: ["Online", "Offline"],
                    required: true,
                },

                title: String,
                subtitle: String,

                price: Number,

                originalPrice: Number,

                duration: String,

                batchSize: String,

                badge: String,

                features: [String],

                buttonText: String,

                popular: {
                    type: Boolean,
                    default: false,
                },
            },
        ],

        modules: [
            {
                title: {
                    type: String,
                    required: true,
                },

                category: {
                    type: String,
                    default: "",
                },

                points: [String],
            },
        ],

        roles: [String],

        featured: {
            type: Boolean,
            default: false,
        },

        status: {
            type: String,
            enum: ["Active", "Inactive"],
            default: "Active",
        },

        displayOrder: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

// Auto-generate slug
jobCourseSchema.pre("save", function () {
    if (this.isModified("courseTitle")) {
        this.slug = slugify(this.courseTitle, {
            lower: true,
            strict: true,
        });
    }
});

const JobCourseModel = mongoose.model("JobCourse", jobCourseSchema);

export default JobCourseModel;