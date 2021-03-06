const circles = [
    {type: 'small', r: 50, x: 100, y: 150},
    {type: 'medium', r: 100, x: 200, y: 150},
    {type: 'large', r: 150, x: 300, y: 150}
]
const svg = d3.select('#circles')
   .append('svg')
   .attr('width', 500)
   .attr('height', 500)
svg.selectAll('circles')
  .data(circles)
  .enter()
  .append('circle')
  .attr('r', d => d.r)
  .attr('cx', d => d.x)
  .attr('cy', d => d,y)
  .attr('class', d => d.type)