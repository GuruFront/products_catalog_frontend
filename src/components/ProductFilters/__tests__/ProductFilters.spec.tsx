import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ProductFilters from "../ProductFilters";


jest.mock("../api", () => ({
    getCategoriesList: {
        then: (callback: any) => callback({ data: { categories: ["Test 1", "Test 2"] } }),
    },
}));

describe("ProductFilters", () => {
    test("renders the component with categories", async () => {
        const onChange = jest.fn();
        render(<ProductFilters onChange={onChange} />);
        await waitFor(() => {
            expect(screen.getByText("Test 1")).toBeInTheDocument();
            expect(screen.getByText("Test 2")).toBeInTheDocument();
        });
    });

    test("does not render the component without categories", async () => {
        const onChange = jest.fn();
        jest.spyOn(React, "useState").mockImplementation(() => [[], jest.fn()]);
        render(<ProductFilters onChange={onChange} />);
        await waitFor(() => {
            expect(screen.queryByText("Test")).not.toBeInTheDocument();
        });
    });

    test("calls onChange with selected categories", async () => {
        const onChange = jest.fn();
        render(<ProductFilters onChange={onChange} />);
        await waitFor(() => {
            const category1Checkbox = screen.getByText('Test 1');
            category1Checkbox.click();
            expect(onChange).toHaveBeenCalledWith({ categories: ["Test 1"] });
        });
    });
});
