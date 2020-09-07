import React from "react";

import TextStyle from "./styles";

export function Text22Bold({ children, style }) {
    return (
        <TextStyle style={style} color='var(--primary-color)' size={22} line={30} weight={'bold'}>
            {children}
        </TextStyle>
    );
}

export function Text20Bold({ children, style }) {
    return (
        <TextStyle style={style} color='var(--primary-color)' size={20} line={27} weight={'bold'}>
            {children}
        </TextStyle>
    );
}

export function Text20SemiBold({ children, style }) {
    return (
        <TextStyle style={style} color='var(--primary-color)' size={20} line={27} weight={600}>
            {children}
        </TextStyle>
    );
}

export function Text20Regular({ children, style }) {
    return (
        <TextStyle style={style} color='var(--primary-color)' size={20} line={27} weight={'normal'}>
            {children}
        </TextStyle>
    );
}

export function Text18Bold({ children, style }) {
    return (
        <TextStyle style={style} color='var(--primary-color)' size={18} line={24} weight={'bold'}>
            {children}
        </TextStyle>
    );
}

export function Text18SemiBold({ children, style }) {
    return (
        <TextStyle style={style} color='var(--primary-color)' size={18} line={24} weight={600}>
            {children}
        </TextStyle>
    );
}

export function Text18Regular({ children, style }) {
    return (
        <TextStyle style={style} color='var(--primary-color)' size={18} line={24} weight={'normal'}>
            {children}
        </TextStyle>
    );
}

export function Text16Bold({ children, style }) {
    return (
        <TextStyle style={style} color='var(--primary-color)' size={16} line={22} weight={'bold'}>
            {children}
        </TextStyle>
    );
}

export function Text16Regular({ children, style }) {
    return (
        <TextStyle style={style} color='var(--primary-color)' size={16} line={22} weight={'normal'}>
            {children}
        </TextStyle>
    );
}

export function Text14Regular({ children, style }) {
    return (
        <TextStyle style={style} color='var(--primary-color)' size={14} line={22} weight={'normal'}>
            {children}
        </TextStyle>
    );
}

export function Text12Bold({ children, style }) {
    return (
        <TextStyle style={style} color='var(--primary-color)' size={12} line={24} weight={'bold'}>
            {children}
        </TextStyle>
    );
}

export function Text12SemiBold({ children, style }) {
    return (
        <TextStyle style={style} color='var(--primary-color)' size={12} line={24} weight={600}>
            {children}
        </TextStyle>
    );
}

export function Text12Regular({ children, style }) {
    return (
        <TextStyle style={style} color='var(--primary-color)' size={12} line={18} weight={'normal'}>
            {children}
        </TextStyle>
    );
}


export function Text18RegularInactive({ children, style }) {
    return (
        <TextStyle style={style} color='var(--inactive-color)' size={18} line={24} weight={'normal'}>
            {children}
        </TextStyle>
    );
}

export function Text16RegularInactive({ children, style }) {
    return (
        <TextStyle style={style} color='var(--inactive-color)' size={16} line={22} weight={'normal'}>
            {children}
        </TextStyle>
    );
}


export function Text14RegularInactive({ children, style }) {
    return (
        <TextStyle style={style} color='var(--inactive-color)' size={14} line={22} weight={'normal'}>
            {children}
        </TextStyle>
    );
}


export function Text12BoldInactive({ children, style }) {
    return (
        <TextStyle style={style} color='var(--inactive-color)' size={12} line={18} weight={'bold'}>
            {children}
        </TextStyle>
    );
}

export function Text12SemiBoldInactive({ children, style }) {
    return (
        <TextStyle style={style} color='var(--inactive-color)' size={12} line={18} weight={600}>
            {children}
        </TextStyle>
    );
}

export function Text12RegularInactive({ children, style }) {
    return (
        <TextStyle style={style} color='var(--inactive-color)' size={12} line={18} weight={'normal'}>
            {children}
        </TextStyle>
    );
}