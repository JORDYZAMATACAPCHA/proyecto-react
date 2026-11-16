import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
            error: string;
            white: string;
        };
        spacing: {
            small: string;
            medium: string;
            large: string;
        };
        radius: string;
    }
}