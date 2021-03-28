import React, {useMemo} from 'react';
import Pie from '@visx/shape/lib/shapes/Pie';
import {Group} from '@visx/group';

import Filters from "./Filters";

const usage = (d) => d.usage;

const defaultMargin = {top: 20, right: 20, bottom: 20, left: 20};

export default function CustomPie({width, height, margin = defaultMargin, data}) {
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const radius = Math.min(innerWidth, innerHeight) / 2;
    const centerY = innerHeight / 2;
    const centerX = innerWidth / 2;

    const values = useMemo(() => {
        const sum = parseInt(data.totalText);
        return data.categories.map((value, i) => ({
            label: i + '',
            usage: parseInt(value.valueText) / sum * Math.PI * 2
        }));
    }, [data]);

    return (
        <svg className="diagram hidden" width={width} height={height}>
            <Filters/>
            <g id="diagram-link">
                <Group top={centerY + margin.top} left={centerX + margin.left}>
                    <Pie data={values}
                         pieValue={usage}
                         outerRadius={radius}
                         innerRadius={radius * .7}
                         cornerRadius={6}
                         pieSort={null}
                         pieSortValues={null}
                         padAngle={Math.PI / 180}
                    >
                        {(value) => {
                            let {arcs, path} = value;
                            return (arcs.map(
                                    ({data, startAngle, endAngle, padAngle}, i) =>
                                        <g key={i} className={'path-container path-container' + (+data.label + 1)}>
                                            <path
                                                d={path({
                                                    ...data,
                                                    startAngle: startAngle - 30 * Math.PI / 180,
                                                    endAngle: endAngle - 30 * Math.PI / 180,
                                                    padAngle
                                                })}
                                                fillOpacity="0.8"
                                            />
                                        </g>
                                )
                            )
                        }
                        }
                    </Pie>
                </Group>
            </g>
        </svg>
    );
}
