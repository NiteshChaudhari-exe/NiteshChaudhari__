/**
 * Form Submission Service with EmailJS Integration
 * Handles contact form submissions with proper error handling and validation
 */

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Send contact form using EmailJS
 * Requires EmailJS to be set up with environment variables
 */
export async function sendContactFormEmailJS(formData: FormData): Promise<EmailResponse> {
  try {
    // Validate environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables not configured');
      return {
        success: false,
        message: 'Email service not configured. Please contact the administrator.',
        error: 'Missing EmailJS configuration',
      };
    }

    // Dynamic import EmailJS to keep bundle smaller
    const emailjs = await import('@emailjs/browser');
    
    // Initialize EmailJS (safe to call multiple times)
    if (!emailjs.default.init) {
      emailjs.default.init(publicKey);
    }

    // Send email with template
    const response = await emailjs.default.send(
      serviceId,
      templateId,
      {
        to_email: 'chaudharinitesh485@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      },
      publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Message sent successfully! I will get back to you soon.',
      };
    }

    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: 'Invalid response status',
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: 'An error occurred while sending your message. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Send contact form using Formspree (Alternative)
 * Simpler setup, no API key needed in frontend
 */
export async function sendContactFormFormspree(formData: FormData): Promise<EmailResponse> {
  try {
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (!formspreeEndpoint) {
      return {
        success: false,
        message: 'Form service not configured.',
        error: 'Missing Formspree endpoint',
      };
    }

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Message sent successfully! I will get back to you soon.',
      };
    }

    if (response.status === 429) {
      return {
        success: false,
        message: 'Too many requests. Please try again later.',
        error: 'Rate limited',
      };
    }

    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: `HTTP ${response.status}`,
    };
  } catch (error) {
    console.error('Formspree Error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Main function to send contact form
 * Automatically selects between EmailJS and Formspree based on environment
 */
export async function sendContactForm(formData: FormData): Promise<EmailResponse> {
  // Try EmailJS first if configured
  if (import.meta.env.VITE_EMAILJS_SERVICE_ID) {
    return sendContactFormEmailJS(formData);
  }

  // Fallback to Formspree if EmailJS not configured
  if (import.meta.env.VITE_FORMSPREE_ENDPOINT) {
    return sendContactFormFormspree(formData);
  }

  // No service configured
  console.warn('No email service configured. Configure EmailJS or Formspree.');
  return {
    success: false,
    message: 'Email service is not configured. Please contact the administrator.',
    error: 'No email service available',
  };
}

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize user input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  // Remove any HTML tags and trim whitespace
  return input
    .replace(/<[^>]*>/g, '')
    .trim();
}
