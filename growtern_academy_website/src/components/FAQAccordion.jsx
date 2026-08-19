import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQAccordion({ faqs = [] }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div >
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          disableGutters
          elevation={0}
          sx={{
            mb: 2,
            borderRadius: "14px !important",
            backgroundColor: "#f5f6fb",
            border: "1px solid #edf0f5",
            "&:before": {
              display: "none",
            },
            overflow: "hidden",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  fontSize: 28,
                  color: "#1e293b",
                }}
              />
            }
            sx={{
              minHeight: 60,
              px: 3,
              "& .MuiAccordionSummary-content": {
                margin: "20px 0",
              },
            }}
          >
            <Typography
              sx={{
                // fontSize: "1.35rem",
                fontWeight: 600,
                color: "#0f172a",
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>

          <AccordionDetails
            sx={{
              px: 3,
              pb: 3,
              pt: 0,
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#03060b",
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}