import { getMCP } from '@smithery/runtime';

async function testGmail() {
  try {
    const gmail = await getMCP('gmail');
    console.log('Gmail MCP initialized successfully');
    
    // Test sending a simple email
    await gmail.sendMail({
      to: 'test@example.com',
      subject: 'Test Email',
      text: 'This is a test email from Gmail MCP'
    });
    
    console.log('Test email sent successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

testGmail();