"""Build the static site with the project's Python environment."""

from pathlib import Path
import shutil
import subprocess
import sys

root = Path(__file__).resolve().parents[1]
venv_python = root / ".venv" / ("Scripts/python.exe" if sys.platform == "win32" else "bin/python")
python = str(venv_python) if venv_python.exists() else sys.executable
output = root / "dist"
if output.exists():
    shutil.rmtree(output)
subprocess.run(
    [python, "-m", "sphinx", "-W", "--keep-going", "-b", "html",
     "-d", str(root / "build" / "doctrees"), str(root / "source"), str(output)],
    cwd=root,
    check=True,
)
