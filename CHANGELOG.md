# Changelog

## [1.0.0] - 2024-08-10

### Added
- **Basic Operations**: Implemented core arithmetic operations: addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
- **Percentage Calculation**: Added functionality to calculate percentages using the percentage (`%`) function.
- **Sign Toggle**: Implemented the toggle sign feature (`+/-`) to switch between positive and negative values.
- **Clear Functionality**: Added the clear button (`C`) to reset the calculator's input and result.
- **Decimal Support**: Enabled the use of decimal numbers with proper handling to avoid multiple decimal points.
- **Calculation Execution**: Integrated a calculation function that evaluates the input expression and updates the result.
- **Error Handling**: Implemented basic error handling to display "Error" when invalid operations are performed (e.g., division by zero).

### Fixed
- **Decimal Handling**: Ensured that only one decimal point can be added to the input, preventing invalid numbers.

### Changed
- Initial release, so no changes have been made yet.

### Known Issues
- **Input Validation**: The current implementation uses `eval()` to evaluate expressions, which may pose security risks if inputs are not properly validated or sanitized.
- **Memory Functions**: The current version does not support memory functions (M+, M-, MR, MC) commonly found in calculators.
