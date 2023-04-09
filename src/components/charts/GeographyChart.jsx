import { ResponsiveChoropleth } from "@nivo/geo";
import { useColors } from "../../hooks/useColors";

const GeographyChart = ({ data, features, isMinimal }) => {
    const { colors } = useColors();
  return (
    <ResponsiveChoropleth
        data={data}
        features={features}
        theme={{
            "axis": {
              "domain": {
                  "line": {
                      "stroke": colors.gray[100],
                  }
              },
              "legend": {
                  "text": {
                      "fill": colors.gray[100],
                  }
              },
              "ticks": {
                  "line": {
                      "stroke": colors.gray[100],
                      "strokeWidth": 1
                  },
                  "text": {
                      "fill": colors.gray[100],
                  }
              }
            },
            "legends": {
              "text": {
                  "fill": colors.gray[100],
              }
           },
           "tooltip": {
             "container": {
                 "color": colors.gray[500],
             }
           }
            }}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[ 0, 1000000 ]}
        projectionScale={isMinimal ? 40 : 120}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={isMinimal ? [ 0.49, 0.6 ] : [ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        graticuleLineColor="#dddddd"
        borderWidth={1}
        borderColor={colors.greenAccent[200]}
        legends={isMinimal ? [] : [
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: colors.gray[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: colors.greenAccent[500],
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default GeographyChart