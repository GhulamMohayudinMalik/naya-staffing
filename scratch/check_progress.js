const fs = require('fs');

const content = fs.readFileSync('extracted_content.txt', 'utf8');
const lines = content.split(/\r?\n/);

const pages = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('Brand: NAYA Staffing') && line.includes('Page Type:')) {
    let pageType = '';
    let suggestedUrl = '';
    
    const pageTypeMatch = line.match(/Page Type:\s*([^\s\r\n]+(?:\s+[^\s\r\n\t]+)*)/i);
    if (pageTypeMatch) {
      const parts = pageTypeMatch[1].split(/(Suggested URL:|Service:|Industry:|Goal:|Purpose:|Decision Type:|Page Name:)/i);
      pageType = parts[0].trim().replace(/Goal:.*|Purpose:.*|Suggested URL:.*/, '');
    }
    
    const urlMatch = line.match(/Suggested URL:\s*([^\s\r\n]+)/i);
    if (urlMatch) {
      suggestedUrl = urlMatch[1].trim();
    } else {
      for (let j = 1; j <= 5; j++) {
        if (i + j < lines.length && lines[i + j].includes('Suggested URL')) {
          const subMatch = lines[i + j].match(/Suggested URL\s*:\s*([^\s\r\n]+)/i);
          if (subMatch) {
            suggestedUrl = subMatch[1].trim();
            break;
          }
        }
      }
    }
    
    suggestedUrl = suggestedUrl.replace(/&amp;/g, '&');
    
    pages.push({
      lineNumber: i + 1,
      pageType,
      suggestedUrl
    });
  }
}

const groups = {
  'Homepage & Overview Pages': [],
  'Individual Service Pages': [],
  'Industry Overview & IT Industry Tree': [],
  'Healthcare Industry Tree': [],
  'Industrial Industry Tree': [],
  'Hospitality Industry Tree': [],
  'Professional Services Tree': [],
  'Education Industry Tree': [],
  'Insurance Industry Tree': [],
  'Retail & E-Commerce Tree': [],
  'Construction Industry Tree': [],
  'Marketing & Sales Industry Trees': [],
  'Employers & Clients Section': [],
  'Candidates & Job Seekers Section': [],
  'Other / Standalone / Legal Pages': []
};

pages.forEach((p) => {
  let relativePath = '';
  let exists = false;
  
  if (p.suggestedUrl) {
    let urlPath = p.suggestedUrl;
    const serviceMatch = urlPath.match(/^\/services\/(.+)$/);
    const options = [];
    
    if (serviceMatch) {
      const name = serviceMatch[1];
      let mappedName = name;
      if (name === 'rpo') mappedName = 'recruitment-process-outsourcing';
      options.push(`src/app/${mappedName}/page.tsx`);
      options.push(`src/app/services/${name}/page.tsx`);
    } else {
      let cleanPath = urlPath.replace(/^\//, '');
      options.push(`src/app/${cleanPath}/page.tsx`);
    }
    
    if (urlPath === '/') {
      options.push('src/app/page.tsx');
    }
    
    for (const opt of options) {
      if (fs.existsSync(opt)) {
        exists = true;
        relativePath = opt;
        break;
      }
    }
  }
  
  const pageInfo = { ...p, exists };
  
  // Categorize
  const url = p.suggestedUrl || '';
  if (url === '/' || url === '/services' || url === '/industries') {
    groups['Homepage & Overview Pages'].push(pageInfo);
  } else if (url.startsWith('/services/')) {
    groups['Individual Service Pages'].push(pageInfo);
  } else if (url.startsWith('/industries/information-technology')) {
    groups['Industry Overview & IT Industry Tree'].push(pageInfo);
  } else if (url.startsWith('/industries/healthcare')) {
    groups['Healthcare Industry Tree'].push(pageInfo);
  } else if (url.startsWith('/industries/industrial')) {
    groups['Industrial Industry Tree'].push(pageInfo);
  } else if (url.startsWith('/industries/hospitality')) {
    groups['Hospitality Industry Tree'].push(pageInfo);
  } else if (url.startsWith('/industries/professional-services')) {
    groups['Professional Services Tree'].push(pageInfo);
  } else if (url.startsWith('/industries/education')) {
    groups['Education Industry Tree'].push(pageInfo);
  } else if (url.startsWith('/industries/insurance')) {
    groups['Insurance Industry Tree'].push(pageInfo);
  } else if (url.startsWith('/industries/retail-ecommerce')) {
    groups['Retail & E-Commerce Tree'].push(pageInfo);
  } else if (url.startsWith('/industries/construction')) {
    groups['Construction Industry Tree'].push(pageInfo);
  } else if (url.startsWith('/industries/marketing') || url.startsWith('/industries/sales')) {
    groups['Marketing & Sales Industry Trees'].push(pageInfo);
  } else if (url.startsWith('/employers')) {
    groups['Employers & Clients Section'].push(pageInfo);
  } else if (url.startsWith('/job-seekers')) {
    groups['Candidates & Job Seekers Section'].push(pageInfo);
  } else {
    groups['Other / Standalone / Legal Pages'].push(pageInfo);
  }
});

let totalCount = 0;
let totalCompleted = 0;

console.log('NAYA STAFFING WEBSITE BUILD PROGRESS SUMMARY:\n');

for (const [groupName, list] of Object.entries(groups)) {
  const completed = list.filter(item => item.exists).length;
  const groupTotal = list.length;
  totalCount += groupTotal;
  totalCompleted += completed;
  const percentage = groupTotal > 0 ? ((completed / groupTotal) * 100).toFixed(0) : '0';
  
  console.log(`## ${groupName} (${completed}/${groupTotal} - ${percentage}%)`);
  list.forEach(p => {
    const mark = p.exists ? ' [x] ' : ' [ ] ';
    console.log(`   ${mark} ${p.suggestedUrl || 'N/A'}`);
  });
  console.log('');
}

console.log('============================================');
console.log(`TOTAL PROGRESS: ${totalCompleted} / ${totalCount} pages implemented (${((totalCompleted / totalCount) * 100).toFixed(1)}%)`);
console.log('============================================');
