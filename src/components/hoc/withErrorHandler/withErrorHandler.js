import React from 'react';
import Modal from '../../UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null
    };

    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      })
      axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error })
      })
    };

    closeErrorhandler = () => {
      this.setState({ error: null })
    }

    render() {
      return (
        <>
          <WrappedComponent {...this.props} />
          <Modal
            visible={this.state.error}
            onClickBackdrop={this.closeErrorhandler}>
            <div className="w-full text-center p-10">
              <h2 className="text-red-700 text-4xl mb-5 font-bold">Sorry... </h2>
              <p className="text-red-400 text-2xl">Something goes wrong 😓
              <br />Error: {this.state.error ? this.state.error.message : null}</p>
            </div>
          </Modal>
        </>
      )
    }
  }
}

export default withErrorHandler;