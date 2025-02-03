const fs = require('fs');

const urls = [
    {url: '', changefreq: 'weekly', priority: 1},
    {url: 'discussion', changefreq: 'weekly', priority: 0.5},
    {url: 'inverse', changefreq: 'weekly', priority: 0.8},
    {url: 'prime_root', changefreq: 'weekly', priority: 0.8},
    {url: 'l_euler', changefreq: 'weekly', priority: 0.8},
    {url: 'lcm', changefreq: 'weekly', priority: 0.8},
    {url: 'order', changefreq: 'weekly', priority: 0.8},
    {url: 'phi_euler', changefreq: 'weekly', priority: 0.8},
    {url: 'add_double', changefreq: 'weekly', priority: 0.8},
    {url: 'fast_pow', changefreq: 'weekly', priority: 0.8},
    {url: 'karatsuba', changefreq: 'weekly', priority: 0.8},
    {url: 'cc_to_int', changefreq: 'weekly', priority: 0.8},
    {url: 'cc_to_poly', changefreq: 'weekly', priority: 0.8},
    {url: 'power_tower', changefreq: 'weekly', priority: 0.8},
    {url: 'smart_order', changefreq: 'weekly', priority: 0.8},
    {url: 'gcd', changefreq: 'weekly', priority: 0.8},
    {url: 'bin_gcd', changefreq: 'weekly', priority: 0.8},
    {url: 'ext_gcd', changefreq: 'weekly', priority: 0.8},
    {url: 'ext_bin_gcd', changefreq: 'weekly', priority: 0.8},
    {url: 'dixon', changefreq: 'weekly', priority: 0.8},
    {url: 'rho_pollard_fact', changefreq: 'weekly', priority: 0.8},
    {url: 'rho_pollard_floyd_fact', changefreq: 'weekly', priority: 0.8},
    {url: 'p_1_pollard', changefreq: 'weekly', priority: 0.8},
    {url: 'fermat', changefreq: 'weekly', priority: 0.8},
    {url: 'adleman', changefreq: 'weekly', priority: 0.8},
    {url: 'gelfond_shanks', changefreq: 'weekly', priority: 0.8},
    {url: 'rho_pollard_floyd_ind', changefreq: 'weekly', priority: 0.8},
    {url: 'tonelli_shenks', changefreq: 'weekly', priority: 0.8},
    {url: 'tonelli_shenks_ext', changefreq: 'weekly', priority: 0.8},
    {url: 'chipolla', changefreq: 'weekly', priority: 0.8},
    {url: 'berlekamp_rabin', changefreq: 'weekly', priority: 0.8},
    {url: 'polyg_hellman', changefreq: 'weekly', priority: 0.8},
    {url: 'linear_comparison', changefreq: 'weekly', priority: 0.8},
    {url: 'solve_lin_comparison', changefreq: 'weekly', priority: 0.8},
    {url: 'solve_lin_comparasion_cto', changefreq: 'weekly', priority: 0.8},
];

const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
    <url>
      <loc>https://www.crypto-math.com/${url.url}</loc>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>`).join('')}
</urlset>
`;

fs.writeFileSync('./public/sitemap.xml', sitemap);
