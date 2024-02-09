import { BarChart, Bar,  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarDataType } from '../../pages/Analytics';
import { useTheme } from '../../store/theme-context';
import { useMediaQuery } from 'react-responsive'



interface DataProps {
  data : Array<BarDataType> | []
}

const CustomTooltip = ({ active, payload, label }:any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-green-300 dark:bg-green-600 dark:text-white">
        <p className="text-sm font-protest">{label}</p>
        <p className="text-sm font-protest">{`No. of Comics : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const renderLegendContent = (props:any) => {
  const { payload } = props;

  return (

    <ul className='flex items-center justify-center'>
      {payload.map((entry:any, index:any) => (
        <li className='flex items-center gap-3' key={`item-${index}`} style={{ color: entry.color }}>
         <span className='block h-4 w-4 bg-green-300 rounded-full'></span> Total Count of Comics
        </li>
      ))}
    </ul>
  );
};






const BarChartComponent : React.FC<DataProps> = ({data}) => {
  const themeData = useTheme()
  const {theme} = themeData
  const IsDark = theme==="dark";

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart 
    width={200} height={200} 
    data={data}>
      <Bar 
      maxBarSize={20}
      dataKey="comicsCount" 
      fill="#4ade80"
       />
      <XAxis dataKey={"name"} tickLine={false} interval={isTabletOrMobile?"preserveStart":0} 
      tick={{fontSize:12,
        fontWeight:'600', 
        stroke:IsDark?'#f1f5f9':'#1e293b'
      }} 
      label={{
        fill : IsDark ? '#ff0000':'black'
      }}
      height={120}
      angle={-45}  
      textAnchor='end' 
      padding={{ left: 20, right: 20 }}
      allowDataOverflow={true}
      />
      <Tooltip cursor={false} content={<CustomTooltip/>}/>
      <YAxis
      tick={{
        stroke:IsDark?'#f1f5f9':'#1e293b'
      }}
      />
      <Legend 
      iconType='circle'
      align='center'
      verticalAlign='top'
      content={renderLegendContent}
      />
    </BarChart>
  </ResponsiveContainer> 
  )
}

export default BarChartComponent